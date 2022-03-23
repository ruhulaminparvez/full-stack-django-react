from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def Index(request):
    return HttpResponse('Hello World!')