from rest_framework import serializers
from .models import RmaItem, Technician
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model


class TechnicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technician
        fields = '__all__'

class RmaItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = RmaItem
        fields = '__all__'


class UserSerializer(UserCreateSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'password')
