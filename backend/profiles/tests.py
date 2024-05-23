from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import UserProfile

class UserProfileTests(TestCase):

    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username='testuser',
            email='testuser@example.com',
            password='password123'
        )

    def test_user_profile_created(self):
        """
        Test that a UserProfile is created when a new user is created.
        """
        self.assertIsInstance(self.user.userprofile, UserProfile)
        self.assertEqual(self.user.userprofile.user, self.user)

    def test_update_user_profile(self):
        """
        Test that updating the user profile works correctly.
        """
        profile = self.user.userprofile
        profile.bio = 'This is a test bio.'
        profile.save()
        self.assertEqual(profile.bio, 'This is a test bio.')

    def test_user_profile_str(self):
        """
        Test the string representation of the UserProfile.
        """
        profile = self.user.userprofile
        expected_str = f'{self.user.username} Profile'
        self.assertEqual(str(profile), expected_str)
