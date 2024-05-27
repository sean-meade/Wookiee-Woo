from django.urls import path

from .views import survey_results_create, test, get_matches

urlpatterns = [
    path('test/', test, name="test_name"),
    path('survey-results-create/', survey_results_create, name='survey_results_create_name'),
    path('get_matches/<str:username>/', get_matches, name='get_matches'),
]
