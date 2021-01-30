from django.contrib import admin
from django.urls import path

from account.api import views

urlpatterns = [
    path('login/', views.ApiLoginView.as_view()),
]
