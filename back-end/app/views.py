from rest_framework.decorators import action
from rest_framework import viewsets
from .serializers import RmaItemSerializer, TechnicianSerializer
from .models import RmaItem, Technician
from django.http import JsonResponse
from django.db.utils import OperationalError
from rest_framework.response import Response
#Autentificación
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login

# Create your views here.

class RmaView(viewsets.ModelViewSet):
    serializer_class = RmaItemSerializer
    queryset = RmaItem.objects.all()


class TechnicianView(viewsets.ModelViewSet):
    serializer_class = TechnicianSerializer
    queryset = Technician.objects.all()


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
        # Obtener las credenciales del cuerpo de la solicitud
        username = request.data.get('username')
        password = request.data.get('password')

        # Autenticar al usuario
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # Iniciar sesión
            login(request, user)

            # Aquí puedes devolver información adicional si es necesario
            return JsonResponse({'message': 'Login exitoso'}, status=status.HTTP_200_OK)
        else:
            # Devolver un mensaje de error si la autenticación falla
            return JsonResponse({'message': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)