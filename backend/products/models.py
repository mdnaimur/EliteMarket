from django.db import models
import uuid
import os
# Create your models here.


class Categories(models.Model):
    title = models.CharField(max_length=100, verbose_name="Categories_Title")
    desc = models.TextField(verbose_name="Description")
    image = models.ImageField(
        upload_to="Categories/%Y", verbose_name="Categories Image")

    def __str__(self):
        return self.title


class SubCategories(models.Model):
    title = models.CharField(
        max_length=100, verbose_name="SubCategories Title")
    categories = models.ManyToManyField(Categories, verbose_name="Categories")

    def __str__(self):
        return self.title


# for unique name of products image
def get_unique_file_path(instance, filename):
    ext = filename.split('.')[-1]
    unique_filename = f"{uuid.uuid4()}.{ext}"
    return os.path.join('products', unique_filename)


class Products(models.Model):
    title = models.CharField(max_length=100, verbose_name="Products_Titile")
    categories = models.ManyToManyField(Categories, verbose_name="Categories")
    sub_categories = models.ManyToManyField(
        SubCategories, verbose_name="subcategories")
    desc = models.TextField(verbose_name="Description")
    image1 = models.ImageField(
        upload_to='products/', verbose_name="Prime Image")
    image2 = models.ImageField(
        upload_to=get_unique_file_path, verbose_name="Second Image", null=True, blank=True)
    price = models.DecimalField(
        max_digits=10, decimal_places=2, verbose_name="Price")
    isNew = models.BooleanField(default=False)

    def __str__(self):
        return self.title
