# backend/profiles/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import SurveyResults
from data import FILMS
# after a merge this can be uncommented
# from .data import films

# I don't think this is relevant for this serializer
# Get the custom user model
# CustomUser = get_user_model()

class SurveyResultsSerializer(serializers.ModelSerializer):
    """
    Serializer for the SurveyResults model.
    """
    class Meta:
        model = SurveyResults
        # I don't know how to get the user id to be put here since the user
        # class is what is stored in the model
        fields = ['user'] + FILMS

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
