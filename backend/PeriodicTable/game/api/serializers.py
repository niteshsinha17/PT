from rest_framework.serializers import ModelSerializer
from game.models import Question, Option, Answer


class OptionSerializer(ModelSerializer):

    class Meta:
        model = Option
        fields = ['option']


class QuestionSerializer(ModelSerializer):
    options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['question', 'options']
