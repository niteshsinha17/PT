from django.db import models
from django.contrib.auth.models import User
# from PIL import Image

# Create your models here.

class Profile(models.Model):
	"""docstring for Profile"""
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	chapter_completed = models.IntegerField(default=0, blank=True)
	def __str__(self):
		return self.user.username

	