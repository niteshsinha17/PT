from django.contrib import admin
from .models import Chapter, Topic, DoYouKnow
# Register your models here.


class TopicsInline(admin.TabularInline):
    model = Topic


class ChapterAdmin(admin.ModelAdmin):
    inlines = [
        TopicsInline
    ]
    list_display = ('name', 'slug')


admin.site.register(Chapter, ChapterAdmin)
admin.site.register(Topic)
admin.site.register(DoYouKnow)
