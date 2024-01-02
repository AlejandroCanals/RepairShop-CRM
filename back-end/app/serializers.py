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
        fields = '__all__'

class RmaItemSerializer(serializers.ModelSerializer):
    assigned_technician = TechnicianSerializer()

    class Meta:
        model = RmaItem
        fields = '__all__'

    def create(self, validated_data):
        technician_data = validated_data.pop('assigned_technician')
        technician = Technician.objects.get_or_create(**technician_data)[0]
        rma_item = RmaItem.objects.create(assigned_technician=technician, **validated_data)
        return rma_item

    def update(self, instance, validated_data):
        technician_data = validated_data.get('assigned_technician')

        if isinstance(technician_data, dict):
            # Si technician_data es un diccionario, actualiza el objeto Technician
            for key, value in technician_data.items():
                setattr(instance.assigned_technician, key, value)
            instance.assigned_technician.save()
        else:
            # Si technician_data es un objeto Technician, simplemente asigna
            instance.assigned_technician = technician_data

        # Resto del código de actualización según tus necesidades
        # ...

        instance.save()
        return instance