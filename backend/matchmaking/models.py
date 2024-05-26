from django.db import models
from ..profiles.models import CustomUser
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.
# Do I need a to dict method even though there is a serializer?
class FilmResults(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    a_new_hope = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    empire_strikes_back = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    return_of_the_jedi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    phantom_menace = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    attack_of_the_clones = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    revenge_of_the_sith = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    force_awakens = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    last_jedi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    rise_of_skywalker = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    rogue_one = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    solo = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    mandalorian = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    book_of_boba_fett = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    obi_wan_kenobi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    andor = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    ahsoka = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    clone_wars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    rebels = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    resistance = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    bad_batch = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    visions = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    tales_of_the_empire = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)
    tales_of_the_jedi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],blank=True)


#class QuestionResults(models.Model):
#    question1 = models.TextChoices()