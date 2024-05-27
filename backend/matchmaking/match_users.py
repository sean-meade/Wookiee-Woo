from math import floor
from .utils import create_weights, FILMS

# This file contains the relevant functions for matching users 
# based on their SurveyResults

# some preprocessing may need to be done to produce u1 and u2 from
# users/profiles.
def distance(u1: dict, u2: dict, weights: dict=create_weights()) -> int:
    '''
    u1 and u2 are dictionaries containing the survey result data. weight is a 
    dictionary that contains the weights necessary to compute the weighted
    sum. adjusting an individual value will scale the importance of that film.
    '''
    overlap = {film: both_exist(u1[film],u2[film]) for film in FILMS}
    sum = 0
    for film, value in overlap.items():
        if value:
            sum += weights[film]*(u1[film]-u2[film])**2
    return sum

# this function addresses the issue of the database not excepting empty strings from the front end.
def both_exist(a,b) -> bool:
    if a>0 and b>0:
        return True
    return False

def max_distance(weights) -> int:
    """
    Computes maximum distance between two users for a given collection of
    weights.
    """
    user_zero = {film: 0 for film in FILMS}
    user_max = {film: 10 for film in FILMS}
    return distance(user_zero, user_max, weights)

def percentage_match(u1: dict, u2: dict, weights: dict=create_weights()) -> int:
    """
    Computes the percentage match based on the above distance function.
    """
    m = max(max_distance(weights),1)
    return floor((m-distance(u1,u2,weights))/m*100)

def is_match(u1: dict, u2: dict, weights: dict=create_weights(), threshold:int=65) -> bool:
    """
    threshold is the cutoff for determining if a pair of users should be
    matched.
    """
    return percentage_match(u1,u2,weights) >= threshold