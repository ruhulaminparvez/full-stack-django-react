from django.urls import path
from api.views import article_list, article_details

urlpatterns = [
    path('article', article_list, name='article_list'),
    path('article/<int:pk>', article_details, name='article_list'),
]