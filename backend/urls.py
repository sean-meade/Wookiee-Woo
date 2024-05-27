# backend/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('backend.profiles.urls')), 
    path('matchmaking/', include('backend.matchmaking.urls'))
]
