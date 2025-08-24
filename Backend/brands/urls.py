from rest_framework import routers
from .views import BrandViewSet

router = routers.DefaultRouter()
router.register('views/brands', BrandViewSet, 'brands')
urlpatterns = router.urls