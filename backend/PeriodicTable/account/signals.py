from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import Profile
from Course.models import Chapter, Topic


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    try:

        chapter = Chapter.objects.first()
        topic = Topic.objects.first()
    except:
        chapter = None
        topic = None

    if created:
        Profile.objects.create(
            user=instance, current_chapter=chapter, current_topic=topic)


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()
