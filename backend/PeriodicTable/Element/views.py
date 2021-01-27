from django.shortcuts import render
from rest_framework import generics
from .models import Element
from .serializers import ElementSerializer, Element_Detail_Serializer

# Create your views here.
class Element_Detail_View(generics.ListAPIView):
	queryset = Element.objects.all()
	serializer_class = Element_Detail_Serializer

class ElementView(generics.ListAPIView):
	queryset = Element.objects.all()
	serializer_class = ElementSerializer