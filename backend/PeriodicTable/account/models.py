from django.db import models
from django.contrib.auth.models import User
from Course.models import Chapter, Topic
from django.core.validators import RegexValidator

# Create your models here.


class Progress(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, blank=True, null=True)
    topic_completed = models.IntegerField(default=0, blank=True)
    current_topic = models.ForeignKey(
        Topic, on_delete=models.CASCADE, blank=True, null=True)
    current_chapter = models.ForeignKey(
        Chapter, on_delete=models.CASCADE, blank=True, null=True, related_name="current_chapter")
    enrolled_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.user.username


class Profile(models.Model):
    GENDER = (('Male', 'Male'), ('Female', 'Female'),
              ('Not to Say', 'Not to Say'))
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, blank=True, null=True)
    # chapter_completed = models.IntegerField(default=0, blank=True)
    f_name = models.CharField(max_length=100, default="", blank=True)
    l_name = models.CharField(max_length=100, default="", blank=True)
    email = models.EmailField(blank=True)
    dob = models.DateField(blank=True, null=True)
    phone_regex = RegexValidator(
        regex=r'^[6-9]{1}[0-9]{9}$', message="Phone number should in the format: '999999999'. Exactly 10 digits allowed. First digit can be 6,7,8,9")
    phone_number = models.CharField(
        validators=[phone_regex], max_length=10, blank=True)
    gender = models.CharField(max_length=30, choices=GENDER)
    profile_image = models.ImageField(upload_to='profile_images', blank=True)

    def __str__(self):
        return self.user.username


class ChapterScore(models.Model):
    progress_user = models.ForeignKey(Progress, on_delete=models.CASCADE)
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    attempted = models.IntegerField(default=0)
    cleared = models.BooleanField(default=False)
    maximum_marks = models.IntegerField(default=0)
    scored_max = models.IntegerField(default=0)

# @receiver(post_save, sender=settings.AUTH_USER_MODEL)
# def create_auth_token(sender, instance=None, created=False ** kwargs):
#     if created:
#         Token.objects.create(user=instance)
