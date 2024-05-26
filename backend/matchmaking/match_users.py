from math import floor
from .utils import create_weights, FILMS

def distance(u1: dict, u2: dict, vector: list[int] = None) -> int:
    """
    Computes the weighted sum of squared differences between u1 and u2.
    """
    weights = create_weights(vector=vector)
    total = 0
    for film in FILMS:
        if film in u1 and film in u2:
            diff = u1[film] - u2[film]
            weighted_diff = weights[film] * diff ** 2
            total += weighted_diff
            print(f"{film}: u1={u1[film]}, u2={u2[film]}, diff={diff}, weighted_diff={weighted_diff}")
    return total

def max_distance(vector: list[int] = None) -> int:
    """
    Computes maximum distance between two users for a given collection of weights.
    """
    user_zero = {film: 0 for film in FILMS}
    user_max = {film: 10 for film in FILMS}
    return distance(user_zero, user_max, vector)

def percentage_match(u1: dict, u2: dict, vector: list[int] = None) -> int:
    """
    Computes the percentage match based on the above distance function.
    """
    m = max_distance(vector)
    if m == 0:
        return 0
    d = distance(u1, u2, vector)
    print(f"Max distance: {m}, Actual distance: {d}")
    return floor((m - d) / m * 100)

def is_match(u1: dict, u2: dict, vector: list[int] = None, threshold: int = 65) -> bool:
    """
    Determines if a pair of users should be matched based on the threshold.
    """
    return percentage_match(u1, u2, vector) >= threshold
