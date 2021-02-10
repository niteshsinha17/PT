from django.urls import include, path

from . import views


urlpatterns = [
    path('<slug:chapter_slug>/', views.quiz_list),
    path('<slug:chapter_slug>/start/', views.question_list),
    path('<slug:chapter_slug>/answer/', views.answer_list),
]
