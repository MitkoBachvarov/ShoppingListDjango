import logging
from rest_framework import serializers
from .models import Product, Recipe, RecipeProducts, ShoppingList

# Create your views here.
logger = logging.getLogger(__name__)


class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields =('id', 'name', 'instructions', 'products')

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id','name')

class ShoppingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ('id','name', 'recipeList', 'description', 'products')


class RecipeProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeProducts
        fields = ('id', 'recipeId', 'name', 'amount', 'availability')
