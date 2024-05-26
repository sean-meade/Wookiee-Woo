from django.urls import path

from .views import survey_results_create

urlpatterns = [
    path('survey-results-create/', survey_results_create, name='survey_results_create_name'),
]
