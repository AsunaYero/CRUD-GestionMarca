
# Importa el módulo de modelos de Django
from django.db import models

# Modelo de base de datos para la entidad "Brand"
class Brand(models.Model):
    # Opciones válidas para el campo status
    STATUS_CHOICES = [
        ("active", "Activo"),    # Marca activa
        ("inactive", "Inactivo"),# Marca inactiva
        ("pending", "Pendiente"),# Marca pendiente
    ]
    id = models.AutoField(primary_key=True)          # ID único, autoincremental
    name = models.CharField(max_length=100)          # Nombre de la Marca
    owner = models.CharField(max_length=100)         # Titular de la marca
    status = models.CharField(
        max_length=20, 
        choices=STATUS_CHOICES   # Solo permite los valores definidos arriba
    )
    created_at = models.DateTimeField(auto_now_add=True) # Fecha de creación automática
    updated_at = models.DateTimeField(auto_now=True)     # Fecha de actualización automática



