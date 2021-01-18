from rest_framework import serializers
from .models import Element

class ElementSerializer(serializers.ModelSerializer):
	"""docstring for ElementSerializer"""
	class Meta:
		model = Element
		fields = '__all__'
		