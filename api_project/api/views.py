from django.shortcuts import render, HttpResponse, redirect
from .serializers import ArticleSerializer


# Create your views here.
def Index(request):
    return HttpResponse('Hello World!')