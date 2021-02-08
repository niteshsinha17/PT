from django.db import models
from django.db.models import Q
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType

# Create your models here.
CONTENT_TYPE_CHOICES = (
    Q(app_label='Course', model='topic element')
)


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


class TopicElement(models.Model):
    topic = models.ForeignKey(
        Topic, related_name='topic_elements', on_delete=models.CASCADE)


class Element(models.Model):
    # _type = models.CharField(choices=)
    content_type = models.ForeignKey(
        ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')


class Image(models.Model):
    img = models.ImageField(upload_to="images/")
    topic = models.ForeignKey(
        Topic, null=True, blank=True, on_delete=models.SET_NULL)
