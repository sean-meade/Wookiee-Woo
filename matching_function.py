from .rt_critic_audience_scores import RT_critic_audience
from math import floor
# This file contains the relevant functions for matching users 
# based on their SurveyResults

# called films but includes TV series as well
films = RT_critic_audience.keys()

# Hard coded weights to start with
even_weight = {film: 1 for film in films}
controversy_weight = {film:abs(RT_critic_audience[film][0]-RT_critic_audience[film][1]) for film in films}
critic_weight = {film:RT_critic_audience[film][0] for film in films}
audience_weight = {film:RT_critic_audience[film][1] for film in films}

def normalize_weights(weights: dict, factor: float=1.0) -> dict:
    """
    With the default of factor=1, this rescales the weights so that the max 
    weight is 1 and all others are relative to it. factor is included as a 
    parameter as you may want the max value to be more heavily weighted.
    """
    max_weight = max([value for value in weights.values()])
    scaling_factor = max_weight*factor
    return {key:value/scaling_factor for key, value in weights.items()}

def convert_to_percentage(weights: dict) -> dict:
    """
    Scales a dictionary so that all weights are between 0 and 1. This may be
    desirable, it may not be.
    """
    return {key: value/100 for key, value in weights.items()}

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

user_zero = {film: 0 for film in even_weight.keys()}
# The value can be changed depending on how we make the form.
user_max = {film: 10 for film in even_weight.keys()}

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

def is_match(u1: dict, u2: dict, weights: dict=even_weight, threshhold:int=65) -> bool:
    """
    threshhold is the cutoff for determining if a pair of users should be
    matched.
    """
    if percentage_match(u1,u2,weights) >= threshhold:
        return True
    return False