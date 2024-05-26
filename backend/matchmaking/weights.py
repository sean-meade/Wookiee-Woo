# weights.py
from .data import FILMS, RT_CA

# Hard coded weights to start with
controversy_weight = {
    film: abs(RT_CA[film][0] - RT_CA[film][1]) for film in FILMS
}
critic_weight = {
    film: RT_CA[film][0] for film in FILMS
}
audience_weight = {
    film: RT_CA[film][1] for film in FILMS
}

# There are several specialized weights that can be made using create_weights.
# Such as "only consider original trilogy films."
