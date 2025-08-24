from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Brand
from .serializers import BrandSerializer

# Create your views here.
class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = BrandSerializer  