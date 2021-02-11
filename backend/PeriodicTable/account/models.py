from django.db import models
from django.contrib.auth.models import User
from Course.models import Chapter, Topic
# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, blank=True, null=True)
    # chapter_completed = models.IntegerField(default=0, blank=True)
    current_topic = models.ForeignKey(
        Topic, on_delete=models.CASCADE, blank=True, null=True)
    current_chapter = models.ForeignKey(
        Chapter, on_delete=models.CASCADE, blank=True, null=True, related_name="current_chapter")
    profile_image = models.ImageField(upload_to='profile_images', blank=True)

    def __str__(self):
        return self.user.username


class ChapterScore(models.Model):
    profile_user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    attempted = models.IntegerField(default=0)
    cleared = models.BooleanField(default=False)
    maximum_marks = models.IntegerField(default=0)
    scored_max = models.IntegerField(default=0)

# @receiver(post_save, sender=settings.AUTH_USER_MODEL)
# def create_auth_token(sender, instance=None, created=False ** kwargs):
#     if created:
#         Token.objects.create(user=instance)
