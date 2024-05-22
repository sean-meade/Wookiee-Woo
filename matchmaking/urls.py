from django.urls import path

from .views import test_view

urlpatterns = [
    path('matchmaking/', test_view, name='test'),
]
