from django.contrib import admin
from django.contrib.contenttypes.admin import GenericStackedInline

from .models import Chapter, Topic, TopicElement, Element
# Register your models here.


class TopicElementAdmin(admin.StackedInline):
    model = TopicElement
    extra = 0
    # fields = ['__all__']


class TopicAdminInline(admin.StackedInline):
    model = Topic
    extra = 0


class ElementInline(GenericStackedInline):
    model = Element
    extra = 0


class ElementTopicAdmin(admin.ModelAdmin):
    inlines = [ElementInline]


class TopicAdmin(admin.ModelAdmin):
    inlines = [TopicElementAdmin]


class ChapterAdmin(admin.ModelAdmin):
    inlines = [TopicAdminInline]


admin.site.register(Chapter, ChapterAdmin)
admin.site.register(Topic, TopicAdmin)
admin.site.register(TopicElement, ElementTopicAdmin)
admin.site.register(Element)
# admin.site.register(Div2)
# admin.site.register(Div3)

# TopicAdmin.inlines += [TopicElementAdmin]
