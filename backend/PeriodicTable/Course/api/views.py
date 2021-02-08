from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import exceptions
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView

from Course.models import Chapter, Topic
from Course.api.serializers import ChapterSerializer, TopicSerializer, ChaptersSerializer, ProfileCourseSerializer
from account.api.serializers import AccountSerializer
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
            print(profile.__dict__)
            current_chapter_data = ProfileCourseSerializer(profile)
            response = {'Chapters': chapter_serializer.data,
                        'current_chapter': current_chapter_data.data}

            return Response(response)
        except:
            response = list(chapter_serializer.data)
            response = {'Chapters': response}
            return Response(response)

    def retrieve(self, request, slug=None):
        chapter = Chapter.objects.get(slug=slug)
        queryset = Topic.objects.filter(chapter=chapter)
        serializer = TopicSerializer(queryset, many=True)

        try:
             auth = request.META.get('HTTP_AUTHORIZATION')
            _, token = auth.split()
            user = Token.objects.get(key=token).user
            profile = Profile.objects.get(user=user)
            chapter_data = ChapterSerializer(chapter)
            current_chapter_data = ProfileCourseSerializer(profile)
            # current_chapter = profile.chapter_completed + 1
            # if current_chapter == pk:
            #     current_topic = profile.topic_completed + 1
            # elif current_chapter < pk:
            #     current_topic = "cannot access"
            # else:
            #     current_topic = 1
            # response = list(serializer.data)
            # response.append({'current_topic': current_topic,
            #                  'current_chapter': current_chapter})
            response = chapter_data.data+current_chapter_data.data
            return Response(response)
        except:
            pass
            return Response(serializer.data)

    def get_topic(self, request, slug=None, topic_slug=None):
        topic_object = Topic.objects.get(slug=topic_slug)
        serializer = TopicSerializer(topic_object)
        print(serializer)
        return Response(serializer.data)


chapter_list = ChapterViewSet.as_view({'get': 'list'})
topic_list = ChapterViewSet.as_view({'get': 'retrieve'})
topic = ChapterViewSet.as_view({'get': 'get_topic'})
