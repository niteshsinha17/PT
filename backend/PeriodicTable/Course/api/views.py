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
from Course.api.serializers import ChapterSerializer, TopicSerializer, ChaptersSerializer, ProfileCourseSerializer, ProfileTopicSerializer, DoYouKnowSerializer
from account.models import Profile


class ChapterViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Chapter.objects.all()
        chapter_serializer = ChapterSerializer(queryset, many=True)
        try:
            auth = request.META.get('HTTP_AUTHORIZATION')
            _, token = auth.split()
            user = Token.objects.get(key=token).user
            profile = Profile.objects.get(user=user)
            current_chapter_data = ProfileCourseSerializer(profile)
            response = {'Chapters': chapter_serializer.data,
                        'current_chapter': current_chapter_data.data}

            return Response(response)
        except:
            response = list(chapter_serializer.data)
            response = {'Chapters': response}
            return Response(response)

    def retrieve(self, request, chapter_slug=None, topic_slug=None):
        chapter = Chapter.objects.get(slug=chapter_slug)
        queryset = Topic.objects.filter(chapter=chapter)
        serializer = TopicSerializer(queryset, many=True)
        if topic_slug is None:
            try:
                auth = request.META.get('HTTP_AUTHORIZATION')
                _, token = auth.split()
                user = Token.objects.get(key=token).user
                profile = Profile.objects.get(user=user)
                current_chapter = profile.current_chapter
                if current_chapter == chapter:
                    current_topic_data = ProfileTopicSerializer(profile)
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
            topic_object = Topic.objects.get(slug=topic_slug)
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


class ExampleView(APIView):
    pass
    throttle_classes = [UserRateThrottle, AnonRateThrottle]

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)


chapter_list = ChapterViewSet.as_view({'get': 'list'})
topic_list = ChapterViewSet.as_view({'get': 'retrieve'})
dyk_list = DoYouKnowView.as_view({'get': 'list'})
