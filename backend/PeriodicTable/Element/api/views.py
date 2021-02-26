from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import exceptions
from rest_framework.authtoken.models import Token

from Element.models import Element, Block, Mnemonics, Group, Period
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
            try:
                auth = request.META.get('HTTP_AUTHORIZATION')
                print(auth)
                _, token = auth.split()
                Token.objects.get(key=token)
            except:
                raise exceptions.AuthenticationFailed('Login Required')
        queryset = Element.objects.all()
        element_object = get_object_or_404(queryset, atomic_number=pk)
        serializer = ElementDetailSerializer(element_object)
        return Response(serializer.data)

    def mnemonics(self, request):
        try:
            group = int(request.GET.get("group"))
            group = Group.objects.get(name=group)
            queryset = Mnemonics.objects.filter(group=group)
        except:
            try:
                period = int(request.GET.get("period"))
                period = Group.objects.get(name=period)
                queryset = Mnemonics.objects.filter(period=period)
            except:
                pass
        serializer = BlockSerializer(queryset, many=True)
        return Response(serializer.data)


pt_elements = ElementViewSet.as_view({'get': 'list'})
element = ElementViewSet.as_view({'get': 'retrieve'})
mnemonics = ElementViewSet.as_view({'get': 'mnemonics'})
