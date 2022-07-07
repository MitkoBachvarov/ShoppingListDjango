import logging
from rest_framework import serializers
from .models import Product, Recipe, ShoppingList

# Create your views here.
logger = logging.getLogger(__name__)

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','name')
    
    def create(self, validated_data):
        return Product.objects.create(**validated_data)

    def update(self, instance, validated_data):
        return Product.objects.update(instance, validated_data)

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields =('id', 'name', 'instructions', 'products')

class ShoppingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ('id','title', 'description', 'weekNumber', 'products')

