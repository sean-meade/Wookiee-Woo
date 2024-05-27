from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from django.core import serializers
from .models import FilmResults
from django.views.decorators.csrf import csrf_exempt
import json
from .models import FilmResults
from ..profiles.models import CustomUser, Match
from .data import FILMS
from random import randrange
from .match_users import is_match, percentage_match
from rest_framework.decorators import api_view
from rest_framework.response import Response


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
            # Find user by get
            user = CustomUser.objects.get(username=username)
            # Add user to films
            films['user'] = user
            # If movie doesn't have a rating add rating as -1 for distance function later
            for film, ranking in films.items():
                if ranking == '':
                    films[film] = -1

            matches = compute_user_matches(user)
            for match in matches.keys():
                user_to_match = get_object_or_404(CustomUser, id=match)

                if user != user_to_match:
                    # Create a match if it doesn't exist
                    match, created = Match.objects.get_or_create(user=user, matched_with=user_to_match)
                    if created:
                        # Create match
                        Match.objects.get_or_create(user=user_to_match, matched_with=user)

            # Create and save Filmresults for user
            film_results = FilmResults(**films)
            film_results.save()
            return JsonResponse({'status': 'success', 'data': json.loads(request.body)})
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

@csrf_exempt
def get_matches(request, username):
    if request.method == 'GET':
        try:
            # Find user by username
            user = CustomUser.objects.get(username=username)
            # Find matches
            matches = Match.objects.filter(user=user)
            matches_details = []
            for match in matches:
                # matched_user = CustomUser.objects.get(id=match.matched_with)
                matches_details.append(match.matched_with)
            # Serialize matches queryset
            data = serializers.serialize('json', matches_details)
            return JsonResponse(data, safe=False)
        except CustomUser.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return HttpResponse("Method not allowed", status=405)



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
    """
    returns response for whatever you are working on at route matchmaking/test.
    """
    user1 = default_user(2)
    matches = compute_user_matches(user1)
    return HttpResponse(str(matches))

def default_user(id=2)->'CustomUser':
    return list(CustomUser.objects.filter(id=id))[0]

def user_to_results(user)-> dict:
    try:
        results = FilmResults.objects.get(user=user)
        results=results.__dict__
        print(results)
        return results
    except:
        return "There are no other users yet"
    
    
    # results = list(FilmResults.objects.filter(user=user))[0]
    # results=results.__dict__
    # return results