from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RmaView, StatusCountView, TechnicianView
from .views import LoginView

router = DefaultRouter()
router.register(r'rmaview', RmaView)
router.register(r'status_count', StatusCountView, basename='status_count')
router.register(r'technicians', TechnicianView, basename='technicians')

urlpatterns = [
    path('', include(router.urls)),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/token/', include('djoser.urls.authtoken')),
    path('api/auth/login/', LoginView.as_view(), name='login'),

]
