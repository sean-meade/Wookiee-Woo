from django.http import HttpResponse
from .models import FilmResults


# I don't know how to write views so I will plan them semantically
# in particular, maybe they should be classes

# How we access things from the request object is maybe not correct.
# Similar for the film_results.
# I may have also used kwargs poorly.
def survey_results_create(request):
    """
    This should take the answers for the questionaire/survey, add the 
    """
    user = request.user
    film_results = request.film_results
    user_film_results = FilmResults(user=user, **film_results)
    user_film_results.save()

def survey_results_display(request):
    """
    Fetch survey results for specified user
    """
    pass
    # return 