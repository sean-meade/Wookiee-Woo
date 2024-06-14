# backend/profiles/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import FilmResults
# after a merge this can be uncommented



class FilmResultsSerializer(serializers.ModelSerializer):
    """
    Serializer for the SurveyResults model.
    """
    class Meta:
        model = FilmResults
        fields = [
            'user', 'a_new_hope', 'the_empire_strikes_back', 'return_of_the_jedi', 'the_phantom_menace', 'attack_of_the_clones', 'revenge_of_the_sith', 
            'the_force_awakens', 'the_last_jedi', 'the_rise_of_skywalker', 'rogue_one', 'solo', 'the_mandalorian', 'the_book_of_boba_fett', 
            'obi_wan_kenobi', 'andor', 'ahsoka', 'the_clone_wars', 'rebels', 'resistance', 'the_bad_batch', 'visions', 'tales_of_the_empire', 
            'tales_of_the_jedi'
        ]
