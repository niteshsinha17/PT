from django.db import models
from Course.models import Topic, Chapter
# Create your models here.


class QuizTopic(models.Model):
    topic = models.ForeignKey(
        Topic, null=True, blank=True, on_delete=models.CASCADE)


class QuizChapter(models.Model):
    chapter = models.ForeignKey(
        Chapter, null=True, blank=True, on_delete=models.CASCADE)


class Question(models.Model):
    quiz_topic = models.ForeignKey(
        QuizTopic, null=True, blank=True, on_delete=models.CASCADE)
    quiz_chapter = models.ForeignKey(
        QuizChapter, null=True, blank=True, on_delete=models.CASCADE)
    question = models.CharField(max_length=500)
    option1 = models.CharField(max_length=200, blank=True)
    option2 = models.CharField(max_length=200, blank=True)
    option3 = models.CharField(max_length=200, blank=True)
    option4 = models.CharField(max_length=200, blank=True)
    answer = models.CharField(max_length=200, blank=True)
