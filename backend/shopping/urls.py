from django.urls import path
from . import views

urlpatterns = [
    path('shopping/', views.OverviewShoppingList.as_view()),
    path('shopping/<int:pk>', views.SingleShoppingListView.as_view()),
    path('shopping/create/', views.OverviewShoppingList.as_view()),
    path('shopping/update/<int:pk>', views.OverviewShoppingList.as_view()),
    path('shopping/products',views.OverviewProductView.as_view()),
    path('shopping/products/<int:pk>', views.SingleProductView.as_view()),
    path('shopping/products/create/', views.OverviewProductView.as_view()),
    path('shopping/products/update/<int:pk>', views.OverviewProductView.as_view())
]
