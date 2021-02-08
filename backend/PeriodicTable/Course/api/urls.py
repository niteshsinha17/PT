from django.urls import include, path

from . import views


urlpatterns = [
    path('all/', views.chapter_list),
    path('<slug:slug>/', views.topic_list),
    path('<slug:slug>/<slug:topic_slug>/', views.topic),
]
