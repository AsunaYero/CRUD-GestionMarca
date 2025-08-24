from django.db import models

# Create your models here.

class Brand(models.Model):
    STATUS_CHOICES = [
        ("active", "Activo"),
        ("inactive", "Inactivo"),
        ("pending", "Pendiente"),
    ]
    id = models.AutoField(primary_key=True)          # ID unico
    name = models.CharField(max_length=100)          # Nombre de la Marca
    owner = models.CharField(max_length=100)         # Titular
    status = models.CharField(max_length=20, choices=STATUS_CHOICES) # Estado de la marca
    created_at = models.DateTimeField(auto_now_add=True) # Fecha de creación del registro
    updated_at = models.DateTimeField(auto_now=True)     # Registro actualizado


