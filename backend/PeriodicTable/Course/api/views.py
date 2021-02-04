from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import exceptions
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView

from Course.models import Chapter, Topic
from Course.api.serializers import ChapterSerializer, TopicSerializer
from account.api.serializers import AccountSerializer
from account.models import Profile


class ChapterViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Chapter.objects.all()
        serializer = ChapterSerializer(queryset, many=True)
        auth = request.META.get('HTTP_AUTHORIZATION')
        _, token = auth.split()
        try:
            user = Token.objects.get(key=token).user
            profile = Profile(user=user)
            current_chapter = profile.chapter_completed + 1
            queryset = Topic.objects.filter(chapter=current_chapter)
            topic_serializer = TopicSerializer(queryset, many=True)
            response = serializer.data + topic_serializer.data
            return Response(response)
        except:
            return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Topic.objects.filter(chapter=pk)
        serializer = TopicSerializer(queryset, many=True)
        auth = request.META.get('HTTP_AUTHORIZATION')
        _, token = auth.split()
        try:
            user = Token.objects.get(key=token).user
            profile = Profile(user=user)
            current_chapter = profile.chapter_completed + 1
            if current_chapter == pk:
                current_topic = profile.topic_completed + 1
            elif current_chapter < pk:
                current_topic = "cannot access"
            else:
                current_topic = 1
            response = list(serializer.data)
            response.append({'current_topic': current_topic,
                             'current_chapter': current_chapter})
            return Response(response)
        except:
            return Response(serializer.data)


chapter_list = ChapterViewSet.as_view({'get': 'list'})
topic_list = ChapterViewSet.as_view({'get': 'retrieve'})
