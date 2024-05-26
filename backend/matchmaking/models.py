from django.db import models
from ..profiles.models import CustomUser
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.
# Do I need a to dict method even though there is a serializer?
class FilmResults(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    a_new_hope = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    empire_strikes_back = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    return_of_the_jedi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    phantom_menace = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    attack_of_the_clones = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    revenge_of_the_sith = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    force_awakens = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    last_jedi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    rise_of_skywalker = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    rogue_one = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    solo = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    mandalorian = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    book_of_boba_fett = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    obi_wan_kenobi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    andor = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    ahsoka = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    clone_wars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    rebels = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    resistance = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    bad_batch = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    visions = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    tales_of_the_empire = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)
    tales_of_the_jedi = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],null=True)


#class QuestionResults(models.Model):
#    question1 = models.TextChoices()