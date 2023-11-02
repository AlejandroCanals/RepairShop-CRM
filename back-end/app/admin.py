from django.contrib import admin
from .models import RmaItem
from .models import Technician

# Register your models here.
admin.site.register(RmaItem)
admin.site.register(Technician)