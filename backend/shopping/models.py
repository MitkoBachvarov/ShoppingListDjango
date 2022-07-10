from tkinter import CASCADE
from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    name = models.CharField(max_length=120)
    instructions = models.TextField()
    products = models.ManyToManyField(Product)

    def __str__(self):
        return self.name

    def get_products(self):
        return "\n".join([p.products for p in Recipe.objects.all()])

class RecipeProducts(models.Model):
    recipeId = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    name = models.CharField(max_length=120)
    amount = models.CharField(max_length=120)
    availability = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class ShoppingList(models.Model):
    name = models.CharField(max_length=120)
    recipeList = models.ManyToManyField(Recipe, blank=True)
    description = models.CharField(max_length=200)
    products = models.ManyToManyField(Product, blank=True)

    def __str__(self):
        return self.title
