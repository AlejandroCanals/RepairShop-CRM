from rest_framework import serializers
from .models import RmaItem , Technician
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model




class UserSerializer(UserCreateSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'password')


class TechnicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technician
        fields = ['id', 'technician_name','user']
        
class RmaItemSerializer(serializers.ModelSerializer):
    assigned_technician = TechnicianSerializer()
    class Meta:
        model = RmaItem
        fields = '__all__'