from django.shortcuts import render
from rest_framework import generics
from .models import Element
from .serializers import ElementSerializer,ElementInfo

# Create your views here.

class Element_view(generics.ListAPIView):
	queryset = Element.objects.all()
	serializer_class = ElementSerializer

class Element_Info(generics.ListAPIView):
	queryset = Element.objects.all()
	serializer_class = ElementInfo