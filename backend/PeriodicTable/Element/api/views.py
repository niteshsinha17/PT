from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import exceptions
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView

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


class ElementDetailView(APIView):
    def get_object(self, pk):
        try:
            return Element.objects.get(atomic_number=pk)
        except Element.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        element_object = self.get_object(pk)
        serializer = ElementDetailSerializer(element_object)
        return Response(serializer.data)
