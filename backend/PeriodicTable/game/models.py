from django.db import models
from Course.models import Topic
# Create your models here.


class QuizTopic(models.Model):
    topic = models.ForeignKey(
        Topic, null=True, blank=True, on_delete=models.CASCADE)


class Question(models.Model):
    quiz = models.ForeignKey(
        QuizTopic, null=True, blank=True, on_delete=models.CASCADE)
    question = models.CharField(max_length=500)
    option1 = models.CharField(max)
