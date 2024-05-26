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
            data = json.loads(request.body)
            username = data['username']
            user = CustomUser.objects.filter(username=username)
            print(user)
            data['user'] = user[0]
            del data['username']
            film_results = FilmResults(**data)
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