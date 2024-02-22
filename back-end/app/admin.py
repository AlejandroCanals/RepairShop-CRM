from django.contrib import admin
from .models import RmaItem, Technician
from .forms import RmaItemForm
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

class RmaItemAdmin(admin.ModelAdmin):
    form = RmaItemForm
    list_display = ('client_name', 'device_model', 'imei', 'status', 'assigned_technician', 'assigned_date')
    search_fields = ('client_name', 'imei', 'assigned_technician__name')

admin.site.register(RmaItem, RmaItemAdmin)
admin.site.register(Technician)

class UserAdmin(BaseUserAdmin):
    list_display = ('id', 'username', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'is_superuser')

# Desregistras el UserAdmin predeterminado
admin.site.unregister(User)

# Registras tu UserAdmin personalizado
admin.site.register(User, UserAdmin)