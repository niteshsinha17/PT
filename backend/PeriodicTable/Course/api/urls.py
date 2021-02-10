from django.urls import include, path

from . import views


urlpatterns = [
    path('all/', views.chapter_list),
    path('dyk/', views.dyk_list),
    path('example/', views.ExampleView.as_view(), name='example'),
    path('<slug:chapter_slug>/', views.topic_list),
    path('<slug:chapter_slug>/<slug:topic_slug>/', views.topic_list),

]
