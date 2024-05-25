# Contains hard coded weights that may be of use
from .data import RT_critic_audience as RTca
from .utils import create_weights

films = list(RTca.keys())
# Hard coded weights to start with
controversy_weight = {film:abs(RTca[film][0]-RTca[film][1]) for film in films}
critic_weight = {film:RTca[film][0] for film in films}
audience_weight = {film:RTca[film][1] for film in films}
# What was even_weight is now gotten by utils.create_weights()

# There are several specialized weights that can be made using create_weights.
# Such as "only consider original trilogy films."


