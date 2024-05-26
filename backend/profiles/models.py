from django.db import models
from django.contrib.auth.models import AbstractUser

GENDERS = (
    (0, "Woman"),
    (1, "Nonbinary"),
    (2, "Genderfluid"),
    (3, "Man"),
    (4, "Prefer not to answer"),
    (5, "Other"),
)

LOOKING_FOR = (
    (0, "Women"),
    (1, "Men and Women"),
    (2, "Neither"),
    (3, "All/Any"),
    (4, "Men"),
)

ALIGNMENT = (
    (0, "Light Side"),
    (1, "Force Neutral"),
    (2, "Dark Side/Sith"),
)

ICON_CHOICES = (
    ("icon1", "Icon 1"),
    ("icon2", "Icon 2"),
    ("icon3", "Icon 3"),
    ("icon4", "Icon 4"),
    ("icon5", "Icon 5"),
    ("icon6", "Icon 6"),
    ("icon7", "Icon 7"),
    ("icon8", "Icon 8"),
    ("icon9", "Icon 9"),
    ("icon10", "Icon 10"),
)

class CustomUser(AbstractUser):
    force_alignment = models.IntegerField(choices=ALIGNMENT, default=1)
    gender = models.IntegerField(choices=GENDERS, default=4)
    looking_for = models.IntegerField(choices=LOOKING_FOR, default=3)
    profile_icon = models.CharField(max_length=20, choices=ICON_CHOICES, default="icon1")
    bio = models.TextField(max_length=500, null=True, blank=True)
    # related name should be removed from suggestions since symmetrical is True
    suggestions = models.ManyToManyField('self', symmetrical=True)
    matches = models.ManyToManyField('self', symmetrical=False, related_name='matched_by')
    facebook = models.CharField(max_length=30, blank=True)
    instagram = models.CharField(max_length=30, blank=True)
    twitter = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return str(self.username)

# Sean_5p: I am curious what the point of this class is. (For educational reasons.)
class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField(max_length=500, null=True, blank=True)

    def __str__(self):
        return f'{self.user.username} Profile'
