
from django.urls import include, path
from .views import Element_Detail_View, ElementView, Element_detailview


urlpatterns = [
    path('details/', Element_Detail_View.as_view()),
    path('element/', ElementView.as_view()),
    path('element/<int:pk>/', Element_detailview.as_view()),
]
