from django import forms
from .models import RmaItem

class RmaItemForm(forms.ModelForm):
    class Meta:
        model = RmaItem
        fields = '__all__'
