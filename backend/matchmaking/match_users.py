from .data import films
from math import floor
from .utils import create_weights

# This file contains the relevant functions for matching users 
# based on their SurveyResults

# some preprocessing may need to be done to produce u1 and u2 from
# users/profiles.
def distance(u1: dict, u2: dict, weights: dict=even_weight) -> int:
    '''
    u1 and u2 are dictionaries containing the survey result data. weight is a 
    dictionary that contains the weights necessary to compute the weighted
    sum. adjusting an individual value will scale the importance of that film.
    '''
    overlap = {film: u1[film] and u2[film] for film in keys}
    sum = 0
    for film, value in overlap.items():
        if value:
            sum += weights[film]*(u1[film]-u2[film])**2
    return sum

user_zero = {film: 0 for film in films}
user_max = {film: 10 for film in films}

def max_distance(weights) -> int:
    """
    Computes maximum distance between two users for a given collection of
    weights.
    """
    return distance(user_zero, user_max, weights)

def percentage_match(u1: dict, u2: dict, weights: dict=even_weight) -> int:
    """
    Computes the percentage match based on the above distance function.
    """
    m = max_distance(weights)
    return floor((m-distance(u1,u2,weights))/m*100)

def is_match(u1: dict, u2: dict, weights: dict=create_weights(), threshhold:int=65) -> bool:
    """
    threshhold is the cutoff for determining if a pair of users should be
    matched.
    """
    if percentage_match(u1,u2,weights) >= threshhold:
        return True
    return False