from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import exceptions
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView

from game.models import Question, Option, Answer
from Course.models import Chapter, Topic
from account.models import Profile, ChapterScore
from game.api.serializers import QuestionSerializer, QuestionAnswerSerializer
from account.api.serializers import ChapterScoreSerializer


class QuestionViewSet(viewsets.ViewSet):
    def quiz(self, request, chapter_slug=None):
        try:
            auth = request.META.get('HTTP_AUTHORIZATION')
            _, token = auth.split()
            user = Token.objects.get(key=token).user
            profile = Profile.objects.get(user=user)
            chapter = Chapter.objects.get(slug=chapter_slug)
            queryset = Question.objects.filter(chapter=chapter)
            chapter_score, _ = ChapterScore.objects.get_or_create(
                profile_user=profile, chapter=chapter, maximum_marks=len(queryset))
            serializer = ChapterScoreSerializer(chapter_score)
            response = {'Chapter Score': serializer.data}
            return Response(response)
        except:
            response = {'status': 'login required'}
            return Response(response)

    def list(self, request, chapter_slug=None):

        try:
            auth = request.META.get('HTTP_AUTHORIZATION')
            _, token = auth.split()
            chapter = Chapter.objects.get(slug=chapter_slug)
            queryset = Question.objects.filter(chapter=chapter)
            serializer = QuestionSerializer(queryset, many=True)
            response = {'questions': serializer.data}
            return Response(response)
        except:
            response = {'status': 'login required'}
            return Response(response)

    def retrieve(self, request, chapter_slug=None):
        try:
            auth = request.META.get('HTTP_AUTHORIZATION')
            _, token = auth.split()
            user = Token.objects.get(key=token).user
            profile = Profile.objects.get(user=user)
            chapter = Chapter.objects.get(slug=chapter_slug)
            queryset = Question.objects.filter(chapter=chapter)
            chapter_score = ChapterScore.objects.get(
                profile_user=profile, chapter=chapter)
            questions = request.data['questions']
            scored = 0
            for i in range(0, len(questions)):
                question_object = Question.objects.get(
                    question=questions[i]['question'], chapter=chapter)
                answer_object = Answer.objects.get(question=question_object)
                if answer_object.answer == questions[i]['answer']:
                    scored = scored + 1
            # chapter_score.maximum_max = len(queryset)
            chapter_score.attempted = chapter_score.attempted + 1

            percentage = scored/chapter_score.maximum_marks*100
            if not chapter_score.cleared:
                chapter_score.scored_max = max(
                    chapter_score.scored_max, scored)
                if percentage > 75:
                    chapter_score.cleared = True
                    chapter_score.save()
                    serializer = QuestionAnswerSerializer(queryset, many=True)
                    try:
                        chapter_id = chapter.id
                        profile.current_chapter = Chapter.objects.get(
                            id=chapter_id+1)
                        queryset_topic = Topic.objects.filter(
                            chapter=profile.current_chapter)
                        profile.current_topic = queryset_topic[0]
                        profile.save()
                    except:
                        pass
                    chapter_score_serializer = ChapterScoreSerializer(
                        chapter_score)
                    response = {
                        'status': 'Successfully Cleared',
                        'percentage': str(percentage),
                        'Questions': serializer.data,
                        'Chapter Sore': chapter_score_serializer.data
                    }

                else:
                    response = {
                        'status': 'Not Cleared',
                        'percentage': percentage
                    }

            else:
                chapter_score.save()
                serializer = QuestionAnswerSerializer(queryset, many=True)
                chapter_score_serializer = ChapterScoreSerializer(
                    chapter_score)
                response = {
                    'status': 'Already Cleared',
                    'percentage': str(percentage),
                    'Questions': serializer.data,
                    'Chapter Sore': chapter_score_serializer.data
                }
            return Response(response)
        except:
            response = {'status': 'login required'}
            return Response(response)


quiz_list = QuestionViewSet.as_view({'get': 'quiz'})
question_list = QuestionViewSet.as_view({'get': 'list'})
answer_list = QuestionViewSet.as_view({'get': 'retrieve'})
