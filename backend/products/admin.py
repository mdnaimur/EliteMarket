from .models import Products, Categories, SubCategories
from django.contrib import admin

# Register your models here.

admin.site.site_header = "Elite - Market"
admin.site.site_title = "Elite Market Admin"
admin.site.index_title = "Products Admistration"

admin.site.register(Products)
admin.site.register(Categories)
admin.site.register(SubCategories)
