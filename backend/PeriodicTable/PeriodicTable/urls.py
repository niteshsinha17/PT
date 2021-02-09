

from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/account/', include('account.api.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/element/', include('Element.api.urls')),
    path('api/course/', include('Course.api.urls')),
    path('api/game/', include('game.api.urls'))
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
