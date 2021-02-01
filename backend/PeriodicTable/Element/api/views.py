from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import exceptions
from rest_framework.authtoken.models import Token

from Element.models import Element, Block
from Element.api.serializers import ElementDetailSerializer, BlockSerializer


class ElementViewSet(viewsets.ViewSet):
    def list(self, request):
        # get element block wise
        queryset = Block.objects.all()
        serializer = BlockSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        # get one element
        if pk > 20:
            auth = request.META.get('HTTP_AUTHORIZATION')
            _, token = auth.split()
            try:
                Token.objects.get(key=token)
            except:
                raise exceptions.AuthenticationFailed('Login Required')
        queryset = Element.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = ElementDetailSerializer(user)
        return Response(serializer.data)


pt_elements = ElementViewSet.as_view({'get': 'list'})
element = ElementViewSet.as_view({'get': 'retrieve'})
