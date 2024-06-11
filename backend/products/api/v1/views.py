from products.api.base.views import BaseProductsListView, BaseCategoriesListView

from .serializers import ProductsSerializer, CategoriesSerializer


class ProductsListView (BaseProductsListView):
    serializer_class = ProductsSerializer


class CategoriesListView(BaseCategoriesListView):
    serializer_class = CategoriesSerializer
