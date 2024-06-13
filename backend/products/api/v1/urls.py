from django.contrib import admin
from django.urls import path, include

from products.api.v1.views import ProductsListView, CategoriesListView, CategoryDetailView

urlpatterns = [
    path('products/', ProductsListView.as_view(), name='products'),
    path('categories/', CategoriesListView.as_view(), name='categories'),
    path('category/<int:id>/',
         CategoryDetailView.as_view(), name='category_detail'),

]
