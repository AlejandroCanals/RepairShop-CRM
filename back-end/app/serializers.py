from rest_framework import serializers
from .models import RmaItem, Technician

class TechnicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technician
        fields = '__all__'

class RmaItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = RmaItem
        fields = '__all__'
