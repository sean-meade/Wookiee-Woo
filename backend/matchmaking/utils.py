from .data import FILMS

def normalize_weights(weights: dict, factor: float = 1.0) -> dict:
    """
    Rescales the weights so that the max weight is normalized to have value factor.
    """
    max_weight = max(weights.values())
    scaling_factor = max_weight / factor
    return {key: value / scaling_factor for key, value in weights.items()}

def convert_to_percentage(weights: dict) -> dict:
    """
    Scales a dictionary so that all weights are between 0 and 1.
    """
    return {key: value / 100 for key, value in weights.items()}

def create_weights(vector: list[int] = None) -> dict[str, int]:
    """
    Takes a list of integers and creates a dict that assigns the int in position i to the film in position i.
    If no vector is provided, it returns an even weight of 1 for each film.
    """
    if vector is None:
        return {film: 1 for film in FILMS}
    elif len(vector) != len(FILMS):
        raise ValueError("The vector you submitted is the wrong length to produce a weight")
    return {film: vector[i] for i, film in enumerate(FILMS)}
