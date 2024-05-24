from rest_framework import viewsets
from django.contrib.auth import get_user_model
from .serializers import CustomUserSerializer

# Get the custom user model
CustomUser = get_user_model()

class CustomUserViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing custom user instances.
    """
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
