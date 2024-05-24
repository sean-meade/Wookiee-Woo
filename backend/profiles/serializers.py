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
