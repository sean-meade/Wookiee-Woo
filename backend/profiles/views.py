# backend/profies/views.py

from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import UserProfile
from .serializers import UserProfileSerializer

class UserProfileListCreateView(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

class UserProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

def home_view(request):
    # Your view logic here
    return render(request, 'home.html', {})  # Example rendering a template named 'home.html'

def about_view(request):
    return render(request, 'about.html', {})

def my_custom_404_view(request):
    return render(request, 'errors/404.html', status=404)