from django.urls import path
from api.views import ArticleList, ArticleDetail

urlpatterns = [
    # path('article', article_list, name='article_list'),
    # path('article/<int:pk>', article_details, name='article_list'),
    path('article', ArticleList.as_view(), name='article_list'),
    path('article/<int:pk>', ArticleDetail.as_view(), name='article_details'),
]