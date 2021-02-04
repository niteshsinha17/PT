from django.urls import include, path

from . import views


urlpatterns = [
    path('all/', views.chapter_list),
    path('<int:pk>/', views.topic_list),
]
