from django.contrib import admin
from .models import Group, Period, Block, Element


class ElementAdmin(admin.ModelAdmin):
    list_display = ('atomic_number', 'name', 'group', 'period')


# Register your models here.
admin.site.register(Group)
admin.site.register(Period)
admin.site.register(Block)
admin.site.register(Element, ElementAdmin)
