from rest_framework import serializers
from .models import Brand

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ('id', 'name', 'owner', 'status', 'created_at', 'updated_at') 
        read_only_fields = ('id', 'created_at', 'updated_at')      