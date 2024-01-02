
from rest_framework import viewsets
from .serializers import RmaItemSerializer, TechnicianSerializer ,Technician
from .models import RmaItem
from django.http import JsonResponse
from django.db.utils import OperationalError
from rest_framework.response import Response
from django.contrib.auth.models import Group
from rest_framework import generics

#Autentificación
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404

# Create your views here.

class RmaView(viewsets.ModelViewSet):
    queryset = RmaItem.objects.all()
    serializer_class = RmaItemSerializer
    
    def perform_create(self, serializer):
        assigned_technician_data = self.request.data.get('assigned_technician')

        # Asegúrate de que assigned_technician_data tenga el ID del técnico
        technician_id = assigned_technician_data.get('id')

        # Busca el técnico existente por ID
        assigned_technician = Technician.objects.get(id=technician_id)

        # Asigna el técnico existente al informe
        serializer.save(assigned_technician=assigned_technician)

class TechnicianView(viewsets.ModelViewSet):
    queryset = Technician.objects.all()
    serializer_class = TechnicianSerializer
    




class StatusCountView(viewsets.ViewSet):
    def list(self, request):
        try:
            received_count = RmaItem.objects.filter(status='Received').count()
            in_repair_count = RmaItem.objects.filter(status='In repair').count()
            repaired_count = RmaItem.objects.filter(status='Repaired').count()

            return Response({
                'received_count': received_count,
                'in_repair_count': in_repair_count,
                'repaired_count': repaired_count,
            })
        except OperationalError as e:
            return JsonResponse({'error': str(e)}, status=500)
        


class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        # Autenticar al usuario
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # Iniciar sesión
            login(request, user)

            # Generar token de autenticación
            token, created = Token.objects.get_or_create(user=user)

            # Obtener detalles del usuario
            user_data = {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'token':token.key,
            }

            return JsonResponse({'message': 'Login exitoso', 'userData': user_data}, status=status.HTTP_200_OK)
        else:
            return JsonResponse({'message': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)