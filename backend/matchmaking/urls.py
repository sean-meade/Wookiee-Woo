from django.urls import path
from . import views

urlpatterns = [
    path(
        'survey_results/create/', 
        views.survey_results_create, 
        name='survey_results_create'
    ),
    path(
        'survey_results/display/<int:user_id>/', 
        views.survey_results_display, 
        name='survey_results_display'
    ),
]
