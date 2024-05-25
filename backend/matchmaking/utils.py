# These are utility functions for manipulating weights and titles
from .data import films

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
        return {film:1 for film in films}
    elif len(vector) != len(films):
          raise ValueError("The vector you submitted is the wrong length to"\
                           "produce a weight")
    return {film: vector[i] for i, film in enumerate(films)}

def norm_title(string:str) -> str:
	string = string.replace('-', ' ')
	if ':' in string:
		string = string.split(':')[1]
	string = string.strip()
	if 'The '== string[0:4]:
		string = string[4:]
	string = string.lower()
	string = string.replace(' ', '_')
	return string