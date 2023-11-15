from django.db import models


# Create your models here.

class RmaItem(models.Model):
    # Fields for the RMA item
    client_name = models.CharField(max_length=100)
    device_model = models.CharField(max_length=20, choices=(('Iphone', 'Iphone'), ('Samsung', 'Samsung'),('Other','Other')))
    imei = models.CharField(max_length=15)
    reason = models.TextField()
    status = models.CharField(max_length=20, choices=(('Received', 'Recibido'), ('In repair', 'En Taller'), ('Repaired', 'Reparado')))
    technician = models.ForeignKey('Technician', on_delete=models.SET_NULL, null=True)
    resolution = models.TextField(blank=True)


    def __str__(self):
        return self.name

class Technician(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    