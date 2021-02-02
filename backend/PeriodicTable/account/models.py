from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Profile(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    chapter_completed = models.IntegerField(default=0, blank=True)
    topic_completed = models.IntegerField(default=0, blank=True)

    # def __str__(self):
    #     return self.user.username


# @receiver(post_save, sender=settings.AUTH_USER_MODEL)
# def create_auth_token(sender, instance=None, created=False ** kwargs):
#     if created:
#         Token.objects.create(user=instance)
