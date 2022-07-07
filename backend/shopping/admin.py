from django.contrib import admin
from .models import Product, Recipe, ShoppingList, RecipeProducts

# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','name')

class ShoppingListAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

class RecipeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'instructions', 'get_products')

class RecipeProductsAdmin(admin.ModelAdmin):
    list_display = ('id', 'recipeId', 'amount', 'availability')


admin.site.register(Product, ProductAdmin)
admin.site.register(ShoppingList, ShoppingListAdmin)
admin.site.register(Recipe, RecipeAdmin)
admin.site.register(RecipeProducts, RecipeProductsAdmin)
