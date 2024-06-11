from django.contrib import admin
from django.urls import path, include

from products.api.v1.views import ProductsListView, CategoriesListView

urlpatterns = [
    path('products/', ProductsListView.as_view(), name='products'),
    path('categories/', CategoriesListView.as_view(), name='categories'),

]
