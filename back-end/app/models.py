from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import pre_save
# Create your models here.


class Technician(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True, blank=True)
    technician_name = models.CharField(max_length=100, default='Sin Nombre')
    def __str__(self):
        return str(self.technician_name)
    
@receiver(pre_save, sender=Technician)
def check_user_association(sender, instance, **kwargs):
    """
    Señal que verifica si un técnico tiene un usuario asociado antes de guardar.
    """
    if instance.user is None:
        raise ValueError("Un técnico debe estar asociado a un usuario.")
    
class RmaItem(models.Model):
    # Fields for the RMA item
    client_name = models.CharField(max_length=100)
    device_model = models.CharField(max_length=20, choices=(('Iphone', 'Iphone'), ('Samsung', 'Samsung'),('Other','Other')))
    imei = models.CharField(max_length=15)
    reason = models.TextField()
    status = models.CharField(max_length=20, choices=(('Received', 'Recibido'), ('In repair', 'En Taller'), ('Repaired', 'Reparado')))
    resolution = models.TextField(blank=True)
    assigned_technician = models.ForeignKey(Technician, null=True, blank=True, on_delete=models.SET_NULL,)
    assigned_date = models.DateTimeField(null=True, blank=True)



    def __str__(self):
        return self.client_name