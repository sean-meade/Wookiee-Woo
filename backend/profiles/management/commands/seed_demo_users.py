import random
from django.core.management.base import BaseCommand
from backend.profiles.models import CustomUser

class Command(BaseCommand):
    help = 'Seed the database with demo users'

    def handle(self, *args, **kwargs):
        for i in range(10):
            username = f'demo_user_{i}'
            email = f'demo_user_{i}@example.com'
            password = 'password123'
            force_alignment = random.choice([0, 1, 2])
            gender = random.choice([0, 1, 2, 3, 4, 5])
            looking_for = random.choice([0, 1, 2, 3, 4])
            profile_icon = random.choice([
                "icon1", "icon2", "icon3", "icon4", "icon5", 
                "icon6", "icon7", "icon8", "icon9", "icon10"
            ])
            bio = f'This is the bio for {username}.'
            facebook = f'{username}_fb'
            instagram = f'{username}_insta'
            twitter = f'{username}_tw'

            if not CustomUser.objects.filter(username=username).exists():
                user = CustomUser.objects.create_user(
                    username=username,
                    email=email,
                    password=password,
                    force_alignment=force_alignment,
                    gender=gender,
                    looking_for=looking_for,
                    profile_icon=profile_icon,
                    bio=bio,
                    facebook=facebook,
                    instagram=instagram,
                    twitter=twitter,
                )
                user.save()

        self.stdout.write(self.style.SUCCESS('Successfully seeded demo users'))
