from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from shopping import serializers
from rest_framework.views import APIView
from .models import Product, Recipe, RecipeProducts, ShoppingList
from rest_framework.response import Response
from rest_framework import generics
import logging

# Create your views here.
logger = logging.getLogger(__name__)


class OverviewRecipesView(APIView):
    def get(self, request):
        queryset = Recipe.objects.all()
        serializer = serializers.RecipeSerializer(queryset, many=True)
        listResponse = []
        for mainProduct in serializer.data:
            productIds = mainProduct.get('products')
            productList = []
            for id in productIds:
                product = Product.objects.filter(id = id).values()
                productList.append(product)
            resp = {
                "id": mainProduct.get('id'),
                "name": mainProduct.get('name'),
                "instructions": mainProduct.get('instructions'),
                "products": productList
            }
            listResponse.append(resp)
        return Response(listResponse)

    def post(self, request):
        serializer = serializers.RecipeSerializer(data = request.data)
        if(serializer.is_valid(raise_exception=True)):
            savedData = serializer.save()
        return Response({"success": "Shopping list '{}' created successfully".format(savedData.name)})


    def put(self, request, pk):
        logger.error("Update operation")
        saved_data = get_object_or_404(Recipe.objects.all(), pk=pk)
        serializer = serializers.RecipeSerializer(instance=saved_data, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            updated_data = serializer.save()
        return Response({"success": "Shopping list '{}' updated successfully".format(updated_data)})


class OverviewRecipeProductView(APIView):

    def get(self, request):
        recipeList = RecipeProducts.objects.all()
        serializer = serializers.RecipeProductsSerializer(recipeList, many=True)
        return Response(serializer.data)

    def post(self, request):
        logger.error(f"Creating a recipe product: ${request.data}")
        serializer = serializers.RecipeProductsSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            saved_data = serializer.save()
        return Response({"success": "Recipe product '{}' created successfully".format(saved_data.name)})

    def put(self, request):
        logger.error(f"Request data from put: {request.data}")
        id = request.data.get("id")
        saved_data = get_object_or_404(RecipeProducts.objects.all(), pk=id)
        serializer = serializers.RecipeProductsSerializer(instance=saved_data, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            updated_data = serializer.save()
        return Response({"success": "Recipe product '{}' updated successfully".format(updated_data.name)})


class SingleRecipeView(APIView):

    def get(self, request, pk):
        savedRecipe = get_object_or_404(Recipe.objects.all(), pk=pk)
        serializer = serializers.RecipeSerializer(instance=savedRecipe)
        productIds = serializer.data.get('products')
        productList = []
        for id in productIds:
            product = Product.objects.filter(id = id).values()
            productList.append(product)
        resp = {
            "name": serializer.data.get("name"),
            "instructions": serializer.data.get("instructions"),
            "products": productList
        }
        return Response(resp)

class OverviewShoppingList(APIView):
    def get(self, request):
        queryset = ShoppingList.objects.all()
        serializer = serializers.ShoppingListSerializer(queryset, many=True)
        return Response(serializer.data)


    def post(self, request):
        logger.error(request.data)
        serializer = serializers.ShoppingListSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            saved_data = serializer.save()
        return Response(saved_data.title)
    
    def put(self, request, pk):
        logger.error(f"Request data from put: {request.data}")
        saved_data = get_object_or_404(ShoppingList.objects.all(), pk=pk)
        serializer = serializers.ShoppingListSerializer(instance=saved_data, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            updated_data = serializer.save()
        return Response({"success": "Shopping list '{}' updated successfully".format(updated_data)})

class SingleShoppingListView(APIView):
    def get(self, request, pk):
        logger.error('Got in pk')
        saved_shoppingList = get_object_or_404(ShoppingList.objects.all(), pk=pk)
        serializer = serializers.ShoppingListSerializer(saved_shoppingList)
        return Response(serializer.data)

class OverviewProductView(APIView):
    def get(self, request):
        queryset = Product.objects.all()
        serializer = serializers.ProductSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        logger.error(request.data)
        serializer = serializers.ProductSerializer(data = request.data, partial=True)
        logger.error(f"Serializer is ${serializer}")
        if serializer.is_valid(raise_exception=True):
            saved_data = serializer.save()
            logger.error('Raising exception after save?')
        return JsonResponse(saved_data)

    def put(self, request, pk):
        saved_data = get_object_or_404(Product.objects.all(), pk=pk)
        serializer = serializers.ProductSerializer(instance=saved_data, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            updated_data = serializer.save()
        return Response({"success": "Shopping list '{}' updated successfully".format(updated_data)})

class SingleProductView(generics.RetrieveAPIView):
    def get(self, request, pk):
        saved_data = get_object_or_404(Product.objects.all(), pk=pk)
        serializer = serializers.ProductSerializer(saved_data)
        return Response(serializer)
