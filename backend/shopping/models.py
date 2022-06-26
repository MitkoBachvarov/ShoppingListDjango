from django.db import models

# Create your models here.

class Product(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()

    def __str__(self):
        return self.title

class ShoppingList(models.Model):
    title = models.CharField(max_length=120)
    weekNumber = models.IntegerField()
    description = models.CharField(max_length=200)
    products = models.ManyToManyField(Product, blank=True)

    def __str__(self):
        return self.title
