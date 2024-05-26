from rest_framework import serializers
from .models import FilmResults

class FilmResultsSerializer(serializers.ModelSerializer):
    """
    Serializer for the FilmResults model.
    """
    user_id = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = FilmResults
        fields = ['user_id'] + [
            'a_new_hope', 'empire_strikes_back', 'return_of_the_jedi', 'phantom_menace',
            'attack_of_the_clones', 'revenge_of_the_sith', 'force_awakens', 'last_jedi',
            'rise_of_skywalker', 'rogue_one', 'solo', 'mandalorian', 'book_of_boba_fett',
            'obi_wan_kenobi', 'andor', 'ahsoka', 'clone_wars', 'rebels', 'resistance',
            'bad_batch', 'visions', 'tales_of_the_empire', 'tales_of_the_jedi'
        ]
