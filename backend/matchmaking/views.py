import sys
from django.http import HttpResponse, JsonResponse
from .models import FilmResults
from django.views.decorators.csrf import csrf_exempt
import json
from .models import FilmResults
from ..profiles.models import CustomUser
from .data import FILMS
from random import randrange
from .match_users import is_match, percentage_match


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
            new_data = data['films']
            new_data['user'] = user[0]
            film_results = FilmResults(**new_data)
            film_results.save()
            return JsonResponse({'status': 'success', 'data': json.loads(request.body)})
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

@csrf_exempt
def survey_results_display(request):
    """
    Fetch survey results for specified user
    Is this function necessary or is this already taken care of.
    """
    pass

# always wrap this in a try and except block so that the appropriate response is
def get_user(request) -> 'CustomUser':
    '''
    Always wrap this function in a try except with the following except block:
    except json.JSONDecodeError:
        return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)
    '''
    data = json.loads(request.body)
    username = data['username']
    return CustomUser.objects.filter(username=username)

def compute_user_matches(primary_user)->dict:
    results = list(FilmResults.objects.all())
    primary_result = user_to_results(primary_user)
    matches = {}
#    return [result.__dict__ for result in results]
    
    #return results[0].__dict__
    for result in results:
        result = result.__dict__
        user_id = result['user_id']
        matches[user_id] = is_match(primary_result,result)
    return matches







def populate_results():
    users = list(CustomUser.objects.all())
    string = ''
    for user in users:
        rand_ratings = {film:randrange(10)+1 for film in FILMS}
        rand_ratings['user']=user
        film_results = FilmResults(**rand_ratings)
        film_results.save()
        string+=user.username+'\n\n'+str(film_results.__dict__)+'\n\n\n'
    return string


        
       

def test(request):
    user1 = default_user(2)
    matches = compute_user_matches(user1)
    return HttpResponse(str(matches))

def default_user(id=2)->'CustomUser':
    return list(CustomUser.objects.filter(id=id))[0]

def user_to_results(user)-> dict:
    results = list(FilmResults.objects.filter(user=user))[0]
    results=results.__dict__
    return results