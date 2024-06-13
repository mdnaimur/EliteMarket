from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import BaseProductsSerializer, BaseCategoriesSerializer
from products.models import Products, Categories
from rest_framework.authentication import SessionAuthentication, BaseAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny


class BaseProductsListView(ListAPIView):
    authentication_classes = []
    permission_classes = []

    queryset = Products.objects.all()
    serializer_class = BaseProductsSerializer


class BaseCategoriesListView(ListAPIView):
    authentication_classes = []
    permission_classes = [AllowAny]

    queryset = Categories.objects.all()
    serializer_class = BaseCategoriesSerializer


class BaseCategoryDetailView(RetrieveAPIView):
    authentication_classes = []
    permission_classes = [AllowAny]

    queryset = Categories.objects.all()
    serializer_class = BaseCategoriesSerializer
    lookup_field = 'id'
