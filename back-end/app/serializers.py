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

    def create_or_update_technician(self, technician_data):
        if isinstance(technician_data, dict):
            # Si technician_data es un diccionario, créalo directamente
            return Technician.objects.create(**technician_data)
        else:
            # Si technician_data es una cadena, crea el objeto Technician
            # aquí utilizando el campo correcto que identifica al técnico
            technician, _ = Technician.objects.get_or_create(technician_name=technician_data)
            return technician

    def create(self, validated_data):
        technician_data = validated_data.pop('assigned_technician')
        technician = self.create_or_update_technician(technician_data)

        rma_item = RmaItem.objects.create(assigned_technician=technician, **validated_data)
        return rma_item

    def update(self, instance, validated_data):
        technician_data = validated_data.get('assigned_technician')
        instance.client_name = validated_data.get('client_name', instance.client_name)
        instance.device_model = validated_data.get('device_model', instance.device_model)
        instance.status = validated_data.get('status', instance.status)
        instance.imei = validated_data.get('imei', instance.imei)
        instance.reason = validated_data.get('reason', instance.reason)
        instance.resolution = validated_data.get('resolution', instance.resolution)
        instance.assigned_date = validated_data.get('assigned_date', instance.assigned_date)

        # Actualiza el objeto Technician independientemente de si es un diccionario o un objeto existente
        instance.assigned_technician = self.create_or_update_technician(technician_data)

        instance.save()
        return instance
