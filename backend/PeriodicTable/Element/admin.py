from django.contrib import admin
from .models import Group, Period, Block, Element
# Register your models here.
admin.site.register(Group)
admin.site.register(Period)
admin.site.register(Block)
admin.site.register(Element)