from django.urls import include, path

from . import views


urlpatterns = [
    path('all/', views.pt_elements),
    path('<int:pk>/', views.element),
    path('mnemonic/', views.mnemonics),
]
