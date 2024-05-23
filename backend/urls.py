from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('profiles/', include('backend.profiles.urls')),
    path('matchmaking/', include('backend.matchmaking.urls')),
    path('favorites/', include('backend.favorites.urls')),
]
