from django.contrib import admin
from .models import Question, Question, Option, Answer, Quiz


class OptionsInline(admin.TabularInline):
    model = Option


class AnswersInline(admin.TabularInline):
    model = Answer


class QuestionAdmin(admin.ModelAdmin):
    inlines = [
        OptionsInline, AnswersInline
    ]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Option)
admin.site.register(Answer)
admin.site.register(Quiz)
