# backend/urls.py
from django.contrib import admin
from django.urls import path, include
from backend.profiles.views import home_view, about_view, my_custom_404_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('profiles/', include('backend.profiles.urls')),
    path('', home_view, name='home'),
    path('about/', about_view, name='about'),
    path('404/', my_custom_404_view, name='custom_404'),  # Define your custom 404 view
]