from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RmaItemSerializer, TechnicianSerializer
from .models import RmaItem, Technician


# Create your views here.

class RmaView(viewsets.ModelViewSet):
    serializer_class = RmaItemSerializer
    queryset = RmaItem.objects.all()


class TechnicianView(viewsets.ModelViewSet):
    serializer_class = TechnicianSerializer
    queryset = Technician.objects.all()