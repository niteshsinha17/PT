from django.db import models

# Create your models here.


class Chapter(models.Model):
    chapter_title = models.CharField(default='', blank=True, max_length=200)
    # Reading time of chapter in minutes
    read_time = models.IntegerField(default=0, blank=True)


class Topic(models.Model):
    topic_title = models.CharField(default='', blank=True, max_length=200)
    chapter = models.ForeignKey(
        Chapter, null=True, blank=True, on_delete=models.CASCADE)
    # Reading time of topic in minutes
    read_time = models.IntegerField(default=0, blank=True)


class Image(models.Model):
    img = models.ImageField(upload_to="images/")
    topic = models.ForeignKey(
        Topic, null=True, blank=True, on_delete=models.SET_NULL)
