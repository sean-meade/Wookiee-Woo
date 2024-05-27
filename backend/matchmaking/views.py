import sys
import sys
from django.http import HttpResponse
from .models import FilmResults
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from .models import FilmResults
from ..profiles.models import CustomUser

# I don't know how to write views so I will plan them semantically
# in particular, maybe they should be classes

# How we access things from the request object is maybe not correct.
# Similar for the film_results.
# I may have also used kwargs poorly.
@csrf_exempt
def survey_results_create(request):
    """
    View used to create and edit Film results
    """
    if request.method == 'POST':
        try:
            # Grab data from request
            data = json.loads(request.body)
            # Grab films from data
            films = data['films']
            # Grab username from data
            username = data['username']
            # Find user by filter
            user = CustomUser.objects.filter(username=username)
            # Add user to films
            films['user'] = user[0]
            # If movie doesn't have a rating add rating as -1 for distance function later
            for film, ranking in films.items():
                if ranking == '':
                    films[film] = -1
            # Create and save Filmresults for user
            film_results = FilmResults(**films)
            film_results.save()

            return JsonResponse({'status': 'success', 'data': json.loads(request.body)})
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)


def survey_results_display(request):
    """
    Fetch survey results for specified user
    """
    pass
    # return 