
from products.models import Products, Categories, SubCategories
from rest_framework import serializers


class BaseProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = "__all__"


class BaseCategoriesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categories
        fields = '__all__'
