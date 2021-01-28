from django.shortcuts import render
from rest_framework import generics
from .models import Element
from .serializers import ElementSerializer, Element_Detail_Serializer
from django.http import Http404
from rest_framework.views import APIView

# Create your views here.
class Element_Detail_View(generics.ListAPIView):
	queryset = Element.objects.all()
	serializer_class = Element_Detail_Serializer

class ElementView(generics.ListAPIView):
	queryset = Element.objects.all()
	serializer_class = ElementSerializer

class Element_detailview(generics.RetrieveAPIView):
    queryset = Element.objects.all()
    serializer_class = Element_Detail_Serializer

