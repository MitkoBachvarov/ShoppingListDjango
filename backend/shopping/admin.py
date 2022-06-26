from django.contrib import admin
from .models import Product, ShoppingList

# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'description')

class ShoppingListAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')


admin.site.register(Product, ProductAdmin)
admin.site.register(ShoppingList, ShoppingListAdmin)
