from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import exceptions
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.throttling import UserRateThrottle, AnonRateThrottle
from random import choice

from Course.models import Chapter, Topic, DoYouKnow
from Course.api.serializers import ChapterSerializer, TopicSerializer, ChaptersSerializer, ProgressCourseSerializer, ProgressTopicSerializer, DoYouKnowSerializer
from account.models import Progress
import datetime


class ChapterViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Chapter.objects.all()
        chapter_serializer = ChapterSerializer(queryset, many=True)
        try:
            auth = request.META.get('HTTP_AUTHORIZATION')
            _, token = auth.split()
            user = Token.objects.get(key=token).user
            profile = Progress.objects.get(user=user)
            current_chapter_data = ProgressCourseSerializer(profile)
            response = {'Chapters': chapter_serializer.data,
                        'current_chapter': current_chapter_data.data}

            return Response(response)
        except:
            response = list(chapter_serializer.data)
            response = {'Chapters': response}
            return Response(response)

    def next(self, request, chapter_no=None, topic_no=None):
        try:
            chapter = Chapter.objects.get(number=chapter_no)
            topic_object = Topic.objects.get(number=topic_no)
        except:
            return Response({'status': 'Invalid Chapter or Topic'})

        try:
            auth = request.META.get('HTTP_AUTHORIZATION')
            _, token = auth.split()
            user = Token.objects.get(key=token).user
            profile = Progress.objects.get(user=user)
        except:
            return Response({'status': 'Login Required'})

        if profile.current_topic != topic_no or profile.current_chapter != chapter_no:
            return Response({'status': 'Login Required'})
            # User can only access next topic when he/she cleared previous one
        try:
            topic_next = Topic.objects.get(number=topic_no+1)
            requested_topic = TopicSerializer(topic_next)
            profile.topic_completed = profile.topic_completed+1
            profile.current_topic = topic_next
            profile.save()
            response = {requested_topic.data}
            return Response(response)
        except:
            chapter = Chapter.objects.get(number=chapter_no+1)
            topic = Topic.objects.filter(chapter=chapter)[0]
            profile.topic_completed = profile.topic_completed+1
            profile.current_topic = topic
            profile.current_chapter = chapter
            profile.save()
            requested_topic = TopicSerializer(topic)
            response = {requested_topic.data}
            return Response(response)

    def retrieve(self, request, chapter_no=None, topic_no=None):
        chapter = Chapter.objects.get(number=chapter_no)
        queryset = Topic.objects.filter(chapter=chapter)
        serializer = TopicSerializer(queryset, many=True)
        if topic_no is None:
            try:
                auth = request.META.get('HTTP_AUTHORIZATION')
                _, token = auth.split()
                user = Token.objects.get(key=token).user
                profile = Progress.objects.get(user=user)
                current_chapter = profile.current_chapter
                if current_chapter == chapter:
                    current_topic_data = ProgressTopicSerializer(profile)
                else:
                    current_topic_data = Topic.objects.get(
                        chapter=chapter, topic_number=1)
                    current_topic_data = TopicSerializer(current_topic_data)
                response = {'Topics': serializer.data,
                            'current_topic': current_topic_data.data}
                return Response(response)
            except:
                response = list(serializer.data)
                response = {'Topics': response}
                return Response(response)
        else:
            topic_object = Topic.objects.get(number=topic_no)
            requested_topic = TopicSerializer(topic_object)
            response = {'Topics': serializer.data,
                        'requested_topic': requested_topic.data}
            return Response(response)


class DoYouKnowView(viewsets.ModelViewSet):
    pass
    # pks = DoYouKnow.objects.values_list('pk', flat=True)
    # random_pk = choice(pks)
    # queryset = DoYouKnow.objects.get(pk=random_pk)
    # # queryset = DoYouKnow.objects.get(id=2)
    # serializer_class = DoYouKnowSerializer
    # throttle_classes = [UserRateThrottle, AnonRateThrottle]


chapter_list = ChapterViewSet.as_view({'get': 'list'})
topic_list = ChapterViewSet.as_view({'get': 'retrieve'})
dyk_list = DoYouKnowView.as_view({'get': 'list'})
topic_next = ChapterViewSet.as_view({'get': 'next'})
