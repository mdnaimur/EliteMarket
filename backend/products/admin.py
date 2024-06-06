from django.contrib import admin
from .models import Products, Categories, SubCategories
# Register your models here.

admin.site.site_header = "Elite - Market"
admin.site.site_title = "Elite Market Admin"
admin.site.index_title = "Products Admistration"

admin.site.register(Products)
admin.site.register(Categories)
admin.site.register(SubCategories)
