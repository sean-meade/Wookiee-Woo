from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.contrib.auth import get_user_model
from .models import FilmResults
from .match_users import is_match, percentage_match

User = get_user_model()

class FilmResultsTests(APITestCase):
    """
    Test suite for the FilmResults model and associated views.
    """

    def setUp(self):
        """
        Set up the test environment.
        """
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.other_user = User.objects.create_user(username='otheruser', password='testpassword')
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)
        self.film_results_data = {
            'a_new_hope': 8,
            'empire_strikes_back': 9,
            'return_of_the_jedi': 7,
            'phantom_menace': 5,
            'attack_of_the_clones': 6,
            'revenge_of_the_sith': 7,
            'force_awakens': 8,
            'last_jedi': 6,
            'rise_of_skywalker': 5,
            'rogue_one': 8,
            'solo': 7,
            'mandalorian': 9,
            'book_of_boba_fett': 6,
            'obi_wan_kenobi': 8,
            'andor': 7,
            'ahsoka': 7,
            'clone_wars': 8,
            'rebels': 6,
            'resistance': 5,
            'bad_batch': 7,
            'visions': 6,
            'tales_of_the_empire': 7,
            'tales_of_the_jedi': 8
        }
        self.other_film_results_data = {
            'a_new_hope': 7,
            'empire_strikes_back': 8,
            'return_of_the_jedi': 6,
            'phantom_menace': 4,
            'attack_of_the_clones': 5,
            'revenge_of_the_sith': 6,
            'force_awakens': 7,
            'last_jedi': 5,
            'rise_of_skywalker': 4,
            'rogue_one': 7,
            'solo': 6,
            'mandalorian': 8,
            'book_of_boba_fett': 5,
            'obi_wan_kenobi': 7,
            'andor': 6,
            'ahsoka': 6,
            'clone_wars': 7,
            'rebels': 5,
            'resistance': 4,
            'bad_batch': 6,
            'visions': 5,
            'tales_of_the_empire': 6,
            'tales_of_the_jedi': 7
        }

    def test_create_survey_results(self):
        """
        Test creating survey results.
        """
        url = reverse('survey_results_create')
        response = self.client.post(url, self.film_results_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(FilmResults.objects.count(), 1)
        self.assertEqual(FilmResults.objects.get().a_new_hope, 8)

    def test_get_survey_results(self):
        """
        Test retrieving survey results for a specific user.
        """
        FilmResults.objects.create(user=self.user, **self.film_results_data)
        url = reverse('survey_results_display', kwargs={'user_id': self.user.id})
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['a_new_hope'], 8)
        self.assertEqual(response.data['empire_strikes_back'], 9)

    def test_get_non_existent_survey_results(self):
        """
        Test retrieving survey results for a non-existent user.
        """
        url = reverse('survey_results_display', kwargs={'user_id': 999})
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_matchmaking(self):
        """
        Test matchmaking between two users.
        """
        # Create survey results for both users
        FilmResults.objects.create(user=self.user, **self.film_results_data)
        FilmResults.objects.create(user=self.other_user, **self.other_film_results_data)

        # Retrieve the survey results
        u1_results = FilmResults.objects.get(user=self.user)
        u2_results = FilmResults.objects.get(user=self.other_user)

        u1_dict = {field: getattr(u1_results, field) for field in self.film_results_data}
        u2_dict = {field: getattr(u2_results, field) for field in self.other_film_results_data}

        # Test the matchmaking logic
        match = is_match(u1_dict, u2_dict)
        
        # Debugging information
        match_percentage = percentage_match(u1_dict, u2_dict)
        print(f"Match percentage: {match_percentage}%")
        
        self.assertTrue(match)
