import sys
from django.http import HttpResponse, JsonResponse
from .models import FilmResults
from django.views.decorators.csrf import csrf_exempt
import json

# I don't know how to write views so I will plan them semantically
# in particular, maybe they should be classes

# How we access things from the request object is maybe not correct.
# Similar for the film_results.
# I may have also used kwargs poorly.
@csrf_exempt
def survey_results_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print(data, file=sys.stderr) 
            # Process the data as needed
            # {'movie1': '3', 'movie2': '5'}
            FilmResults
            return JsonResponse({'status': 'success', 'data': data})
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)


def survey_results_display(request):
    """
    Fetch survey results for specified user
    """
    pass
    # return 