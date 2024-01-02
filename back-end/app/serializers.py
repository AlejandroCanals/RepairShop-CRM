from rest_framework import serializers
from .models import RmaItem , Technician
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model




class UserSerializer(UserCreateSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'password')


class TechnicianSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    class Meta:
        model = Technician
        fields = ['id', 'technician_name','user']
        
class RmaItemSerializer(serializers.ModelSerializer):
    assigned_technician = TechnicianSerializer(required=False)
    class Meta:
        model = RmaItem
        fields = '__all__'

    def update(self, instance, validated_data):
        # Handle the update logic for the RmaItem instance here
        # For example, if you want to update the assigned_technician field
        # you need to get the Technician instance from the validated data
        # and then update the assigned_technician field of the RmaItem instance
        assigned_technician_data = validated_data.pop('assigned_technician', None)
        if assigned_technician_data:
            assigned_technician = instance.assigned_technician
            assigned_technician_serializer = TechnicianSerializer(assigned_technician, data=assigned_technician_data, partial=True)
            if assigned_technician_serializer.is_valid():
                assigned_technician_serializer.save()
        return super().update(instance, validated_data)