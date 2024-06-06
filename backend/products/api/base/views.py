from rest_framework.generics import ListAPIView
from .serializers import BaseProductsSerializer
from products.models import Products


class BaseProductsListView(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = BaseProductsSerializer
