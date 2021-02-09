from django.db import models
from Element.models import Element


class Chapter(models.Model):
    name = models.CharField(default='', blank=True, max_length=200)
    chapter_number = models.PositiveIntegerField(default=1)
    slug = models.SlugField(max_length=250, null=True, blank=True)
    read_time = models.IntegerField(default=0, blank=True)

    def __str__(self):
        return self.name


class Topic(models.Model):
    name = models.CharField(default='', blank=True, max_length=200)
    topic_number = models.PositiveIntegerField(default=1)
    slug = models.SlugField(max_length=250, null=True, blank=True)
    chapter = models.ForeignKey(
        Chapter, null=True, blank=True, on_delete=models.CASCADE, related_name='topics')
    read_time = models.IntegerField(default=0, blank=True)

    def __str__(self):
        return self.name


class DoYouKnow(models.Model):
    info = models.CharField(default='', max_length=500)
    element = models.ForeignKey(
        Element, null=True, blank=True, on_delete=models.CASCADE, related_name='doyouknow')

    class Meta:
        verbose_name = 'Do You Know Note'
        verbose_name_plural = 'Do You Know Notes'


class Image(models.Model):
    img = models.ImageField(upload_to="images/")
    topic = models.ForeignKey(
        Topic, null=True, blank=True, on_delete=models.SET_NULL)
