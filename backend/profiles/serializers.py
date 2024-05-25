# backend/profiles/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model

# Get the custom user model
CustomUser = get_user_model()

class CustomUserSerializer(serializers.ModelSerializer):
    """
    Serializer for the CustomUser model.
    """
    class Meta:
        model = CustomUser
        fields = [
            'id', 'username', 'force_alignment', 'gender', 'looking_for', 
            'profile_icon', 'bio', 'facebook', 'instagram', 'twitter'
        ]

class RegisterSerializer(serializers.ModelSerializer):
    """
    Serializer for user registration.
    """
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class ProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for updating user profile.
    """
    class Meta:
        model = CustomUser
        fields = [
            'id', 'username', 'force_alignment', 'gender', 'looking_for', 
            'profile_icon', 'bio', 'facebook', 'instagram', 'twitter', 'email'
        ]
