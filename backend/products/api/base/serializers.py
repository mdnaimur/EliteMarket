
from products.models import Products
from rest_framework import serializers
from rest_framework.authentication import SessionAuthentication, BaseAuthentication
from rest_framework.permissions import IsAuthenticated


class BaseProductsSerializer(serializers.ModelSerializer):
    authentication_classes = [SessionAuthentication, BaseAuthentication]
    permission_classes = [IsAuthenticated]

    class Meta:
        model = Products
        fields = "__all__"
