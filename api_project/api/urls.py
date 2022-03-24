from django.urls import path, include
# from api.views import article_list, article_details, ArticleList, ArticleDetail
from api.views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet)

urlpatterns = [
    # path('article', article_list, name='article_list'),
    # path('article/<int:pk>', article_details, name='article_list'),
    # path('article', ArticleList.as_view(), name='article_list'),
    # path('article/<int:pk>', ArticleDetail.as_view(), name='article_details'),
    path('api/', include(router.urls)),
]