from django.urls import path

from .views import test_view

urlpatterns = [
    path('favorites/', test_view, name='test'),
]
