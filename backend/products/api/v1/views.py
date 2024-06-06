from products.api.base.views import BaseProductsListView

from .serializers import ProductsSerializer


class ProductsListView (BaseProductsListView):
    serializer_class = ProductsSerializer
