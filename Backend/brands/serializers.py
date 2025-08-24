
# Importa el módulo de serializadores de DRF
from rest_framework import serializers
# Importa el modelo Brand
from .models import Brand

# Serializador para exponer el modelo Brand vía API
class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand  # Modelo a serializar
        fields = ('id', 'name', 'owner', 'status', 'created_at', 'updated_at') # Campos expuestos
        read_only_fields = ('id', 'created_at', 'updated_at') # Campos solo lectura