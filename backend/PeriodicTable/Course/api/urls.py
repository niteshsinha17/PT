from django.urls import include, path

from Course.api import views


urlpatterns = [
    path('all/', views.chapter_list),
    path('dyk/', views.dyk_list),
    path('next/<int:chapter_no>/<int:topic_no>/', views.topic_next),
    path('<int:chapter_no>/', views.topic_list),
    path('<int:chapter_no>/<int:topic_no>/', views.topic_list),

]
