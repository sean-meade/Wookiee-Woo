# backend/profiles/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import FilmResults
from data import FILMS
# after a merge this can be uncommented



class FilmResultsSerializer(serializers.ModelSerializer):
    """
    Serializer for the SurveyResults model.
    """
    class Meta:
        model = FilmResults
        # I would like to include the user id for safety check purposes.
        fields = FILMS