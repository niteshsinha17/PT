from django.db import models
from Course.models import Topic, Chapter
# Create your models here.


class Quiz(models.Model):
    topic = models.ForeignKey(
        Topic, null=True, blank=True, on_delete=models.CASCADE, related_name='quiz')
    chapter = models.ForeignKey(
        Chapter, null=True, blank=True, on_delete=models.CASCADE, related_name='quiz')
    name = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.name


class Question(models.Model):
    # topic = models.ForeignKey(
    #     Topic, null=True, blank=True, on_delete=models.CASCADE, related_name='questions')
    # chapter = models.ForeignKey(
    #     Chapter, null=True, blank=True, on_delete=models.CASCADE, related_name='questions')
    quiz = models.ForeignKey(
        Quiz, null=True, blank=True, on_delete=models.CASCADE, related_name='questions')
    question = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.question


class Option(models.Model):
    question = models.ForeignKey(
        Question, null=True, blank=True, on_delete=models.CASCADE, related_name='options')
    option = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.option


class Answer(models.Model):
    question = models.ForeignKey(
        Question, null=True, blank=True, on_delete=models.CASCADE, related_name='answer')
    answer = models.CharField(max_length=200, null=True, blank=True)
    reason = models.CharField(max_length=600, null=True, blank=True)

    def __str__(self):
        return self.answer
