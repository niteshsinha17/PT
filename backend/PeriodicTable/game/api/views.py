from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import exceptions
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView

from game.models import Question, Option, Answer
from Course.models import Chapter
from account.models import Profile, ChapterScore
from game.api.serializers import QuestionSerializer
from account.api.serializers import ChapterScoreSerializer
# from account.models import Profile


class QuestionViewSet(viewsets.ViewSet):
    def quiz(self, request, chapter_slug=None):
        try:
            auth = request.META.get('HTTP_AUTHORIZATION')
            _, token = auth.split()
            user = Token.objects.get(key=token).user
            profile = Profile.objects.get(user=user)
            chapter = Chapter.objects.get(slug=chapter_slug)
            chapter_score, _ = ChapterScore.objects.get_or_create(
                profile_user=profile, chapter=chapter)
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
            print(len(queryset))
            serializer = QuestionSerializer(queryset, many=True)
            response = {'questions': serializer.data}
            return Response(response)
        except:
            response = {'status': 'login required'}
            return Response(response)

    def retrieve(self, request, chapter_slug=None):
        # print(request)
        # print(request.data)
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
                # print(questions[i]['question'])
                question_object = Question.objects.get(
                    question=questions[i]['question'])
                answer_object = Answer.objects.get(question=question_object)
                # print(answer_object.answer)
                if answer_object.answer == questions[i]['answer']:
                    scored = scored + 1
            chapter_score.maximum_max = len(queryset)
            chapter_score.attempted = chapter_score.attempted + 1
            chapter_score.scored_max = max(chapter_score.scored_max, scored)
            percentage = chapter_score.scored_max/chapter_score.maximum_max*100
            if percentage > 75:
                chapter_score.cleared = True
            # print(type(questions))
            # print(len(questions))
            # print(questions)
            response = {
                'status': 'Successfully Cleared',
                'percentage': percentage
            }
            return Response(response)
        except:
            response = {'status': 'login required'}
            return Response(response)


quiz_list = QuestionViewSet.as_view({'get': 'quiz'})
question_list = QuestionViewSet.as_view({'get': 'list'})
answer_list = QuestionViewSet.as_view({'get': 'retrieve'})
