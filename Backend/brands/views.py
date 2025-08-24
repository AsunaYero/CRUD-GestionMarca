
# Importa viewsets y permisos de DRF
from rest_framework import viewsets, permissions
# Importa el modelo y el serializador
from .models import Brand
from .serializers import BrandSerializer

# ViewSet que implementa el CRUD para Brand
class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()  # Consulta todas las marcas
    permission_classes = [permissions.AllowAny]  # Permite acceso público
    serializer_class = BrandSerializer  # Usa el serializador definido