from rest_framework.serializers import ModelSerializer
from game.models import Question, Option, Answer, Quiz


class QuizSerializer(ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['name']


class OptionSerializer(ModelSerializer):

    class Meta:
        model = Option
        fields = ['option']


class QuestionSerializer(ModelSerializer):
    options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['question', 'options']


class AnswerSerializer(ModelSerializer):
    class Meta:
        model = Answer
        fields = ['answer', 'reason']


class QuestionAnswerSerializer(ModelSerializer):
    answer = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['question', 'answer']
