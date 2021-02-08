from django.db import models


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


class Image(models.Model):
    img = models.ImageField(upload_to="images/")
    topic = models.ForeignKey(
        Topic, null=True, blank=True, on_delete=models.SET_NULL)
