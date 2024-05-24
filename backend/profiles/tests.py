# tests.py
from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import UserProfile

CustomUser = get_user_model()

class UserProfileTests(TestCase):

    def setUp(self):
        self.user = CustomUser.objects.create_user(
            username='testuser',
            email='testuser@example.com',
            password='password123'
        )

    def test_user_profile_created(self):
        """
        Test that a UserProfile is created when a new user is created.
        """
        self.assertIsInstance(self.user.profile, UserProfile)  # Use self.user.profile
        self.assertEqual(self.user.profile.user, self.user)  # Use self.user.profile

    def test_update_user_profile(self):
        """
        Test that updating the user profile works correctly.
        """
        profile = self.user.profile  # Use self.user.profile
        profile.bio = 'This is a test bio.'
        profile.save()
        self.assertEqual(profile.bio, 'This is a test bio.')

    def test_user_profile_str(self):
        """
        Test the string representation of the UserProfile.
        """
        profile = self.user.profile  # Use self.user.profile
        expected_str = f'{self.user.username} Profile'
        self.assertEqual(str(profile), expected_str)
