

from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

from account.views import (ApiLoginView, UserViewSet, GroupViewSet)

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)


urlpatterns = [
    path('admin', admin.site.urls),
    path('', include(router.urls)),
    path('api-token-auth/', ApiLoginView.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('element/', include('Element.urls'))
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)