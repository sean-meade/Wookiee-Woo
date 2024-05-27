# These are utility functions for manipulating weights and titles
from data import FILMS
from collections import defaultdict


def normalize_weights(weights: dict, factor: float=1.0) -> dict:
    """
    With the default of factor=1, this rescales the weights so that the max 
    weight is 1 and all others are relative to it. factor is included as a 
    parameter as you may want the max value to be more heavily weighted.
    """
    # I changed the scaling factor so that now the max wieght will be
    # normalized to have value factor.
    max_weight = max([value for value in weights.values()])
    scaling_factor = max_weight/factor
    return {key:value/scaling_factor for key, value in weights.items()}


def convert_to_percentage(weights: dict) -> dict:
    """
    Scales a dictionary so that all weights are between 0 and 1. This may be
    desirable, it may not be.
    """
    return {key: value/100 for key, value in weights.items()}


def create_weights(vector:list[int]=None) -> dict[str,int]:
    """
    Takes a list of integers and create a dict that assigns the int in
    position i to the film in position i.
    """
    if vector is None:
        return {film:1 for film in FILMS}
    elif len(vector) != len(FILMS):
          raise ValueError("The vector you submitted is the wrong length to"\
                           "produce a weight")
    return {film: vector[i] for i, film in enumerate(FILMS)}

def invert_dict(sample:dict) -> dict:
    """
    Returns a dict with key:value where key in sample[val]
    for all val in value.
    """
    keys_sets = sample.values()
    keys=set()
    for key_set in keys_sets:
        for key in key_set:
            keys.add(key)
    #print(keys)
    #input()
    inverse = defaultdict(set)
    for key in keys:
        #print(f"{key=}")
        for old_key in sample.keys():
         #   print(f"{old_key=},{key=}")
          #  print(sample[old_key])
           # input()
            if key in sample[old_key]:
                inverse[key].add(old_key)
    return inverse

