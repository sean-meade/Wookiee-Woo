from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import CustomUser, UserProfile

@receiver(post_save, sender=CustomUser)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    """
    Signal to create or update a UserProfile when a CustomUser is created or updated.
    """
    if created:
        UserProfile.objects.create(user=instance)
    else:
        instance.profile.save()
