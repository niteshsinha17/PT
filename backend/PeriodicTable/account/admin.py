from django.contrib import admin
from .models import Profile, Progress, ChapterScore

# Register your models here.
admin.site.register(Profile)
admin.site.register(ChapterScore)
admin.site.register(Progress)
