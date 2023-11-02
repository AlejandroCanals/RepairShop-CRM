from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RmaView, TechnicianView

router = DefaultRouter()
router.register(r'rmaview', RmaView)
router.register(r'technicianview', TechnicianView)

urlpatterns = [
    path('', include(router.urls)),
]
