from django.contrib import admin
from .models import RmaItem, Technician
from .forms import RmaItemForm

class RmaItemAdmin(admin.ModelAdmin):
    form = RmaItemForm
    list_display = ('client_name', 'device_model', 'imei', 'status', 'assigned_technician', 'assigned_date')
    search_fields = ('client_name', 'imei', 'assigned_technician__name')

admin.site.register(RmaItem, RmaItemAdmin)
admin.site.register(Technician)
