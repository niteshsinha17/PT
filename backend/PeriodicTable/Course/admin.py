from django.contrib import admin
from .models import Chapter, Topic, ElementType, Div1, Div2, Div3
# Register your models here.


class Div1Inline(admin.TabularInline):
    model = ElementType


class ElementTypeAdmin(admin.ModelAdmin):
    inlines = [
        Div1Inline,
    ]


admin.site.register(Chapter)
admin.site.register(Topic)
admin.site.register(ElementType)
admin.site.register(Div1)
admin.site.register(Div2)
admin.site.register(Div3)
