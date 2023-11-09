from rest_framework.decorators import action
from rest_framework import viewsets
from .serializers import RmaItemSerializer, TechnicianSerializer
from .models import RmaItem, Technician
from django.http import JsonResponse
from django.db.utils import OperationalError
from rest_framework.response import Response

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