from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RmaView, TechnicianView,StatusCountView

router = DefaultRouter()
router.register(r'rmaview', RmaView)
router.register(r'technicianview', TechnicianView)
router.register(r'status_count', StatusCountView, basename='status_count')

urlpatterns = [
    path('', include(router.urls)),
]
