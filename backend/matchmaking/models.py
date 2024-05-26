from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from ..profiles.models import CustomUser

class FilmResults(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    a_new_hope = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    empire_strikes_back = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    return_of_the_jedi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    phantom_menace = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    attack_of_the_clones = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    revenge_of_the_sith = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    force_awakens = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    last_jedi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    rise_of_skywalker = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    rogue_one = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    solo = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    mandalorian = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    book_of_boba_fett = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    obi_wan_kenobi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    andor = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    ahsoka = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    clone_wars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    rebels = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    resistance = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    bad_batch = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    visions = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    tales_of_the_empire = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)
    tales_of_the_jedi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)], default=1, blank=True)