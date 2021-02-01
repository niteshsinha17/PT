from django.db import models
from django.db.models import Q
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType

# Create your models here.
CONTENT_TYPE_CHOICES = (
    Q(app_label='Course', model='div1') |
    Q(app_label='Course', model='div2') |
    Q(app_label='Course', model='div3')
)


class Chapter(models.Model):
    chapter_title = models.CharField(default='', blank=True, max_length=200)
    # Reading time of chapter in minutes
    read_time = models.IntegerField(default=0, blank=True)


class Topic(models.Model):
    topic_title = models.CharField(default='', blank=True, max_length=200)
    chapter = models.ForeignKey(
        Chapter, null=True, blank=True, on_delete=models.CASCADE)
    theory = models.CharField(default='', blank=True, max_length=1000)
    # Reading time of topic in minutes
    read_time = models.IntegerField(default=0, blank=True)


class Image(models.Model):
    img = models.ImageField(upload_to="images/")
    topic = models.ForeignKey(
        Topic, null=True, blank=True, on_delete=models.SET_NULL)


class ElementType(models.Model):

    topic = models.ForeignKey(
        Topic, null=True, blank=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    # Listed below are the mandatory fields for a generic relation
    content_type = models.ForeignKey(
        ContentType, on_delete=models.CASCADE, limit_choices_to=CONTENT_TYPE_CHOICES,)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')


class Div1(models.Model):
    h1 = models.CharField(default='', blank=True, max_length=200)
    element_type = GenericRelation(ElementType)


class Div2(models.Model):
    h2 = models.CharField(default='', blank=True, max_length=200)
    element_type = GenericRelation(ElementType)


class Div3(models.Model):
    h3 = models.CharField(default='', blank=True, max_length=200)
    element_type = GenericRelation(ElementType)
