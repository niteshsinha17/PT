from django.db import models

# Create your models here.

class Chapter(object):
	"""docstring for Chapter"""
	Chapter_title = models.CharField(default='', blank=True, max_length=200)
	read_time = IntegerField(default=0, blank=True) # Reading time of chapter in minutes
		

class Topic(object):
	"""docstring for Topic"""
	Topic_title = models.CharField(default='', blank=True, max_length=200)
	chapter = models.ForeignKey(Chapter,null=True, blank=True, on_delete=models.SET_NULL)
	read_time = models.IntegerField(default=0, blank=True) # Reading time of topic in minutes