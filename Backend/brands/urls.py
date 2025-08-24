
# Importa el router de DRF y el ViewSet
from rest_framework import routers
from .views import BrandViewSet

# Crea un router y registra el ViewSet en la ruta 'views/brands'
router = routers.DefaultRouter()
router.register('views/brands', BrandViewSet, 'brands')

# Expone las URLs generadas automáticamente por el router
urlpatterns = router.urls