import logging
from rest_framework import serializers
from .models import Product, ShoppingList

# Create your views here.
logger = logging.getLogger(__name__)

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','title', 'description')
    
    def create(self, validated_data):
        return Product.objects.create(**validated_data)

    def update(self, instance, validated_data):
        return Product.objects.update(instance, validated_data)


class ShoppingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ('id','title', 'description', 'weekNumber', 'products')

