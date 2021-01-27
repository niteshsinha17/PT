from rest_framework import serializers
from .models import Element

class Element_Detail_Serializer(serializers.ModelSerializer):
	class Meta:
		model = Element
		fields = '__all__'

class ElementSerializer(object):
	class Meta:
		model = Element
		fields = ('AtomicNumber','Symbol','Element')
