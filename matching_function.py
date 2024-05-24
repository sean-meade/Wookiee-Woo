from .rt_critic_audience_scores import RT_critic_audience
# This file contains the relevant functions for matching users 
# based on their SurveyResults

# This dictionary contains weights for the different fields.
# These weights are adjustable and subject to change.
# There is maybe a more efficient way to store these things.
keys = ['a_new_hope', 'empire_strikes_back', 'return_of_the_jedi',
    'phantom_menace', 'attack_of_the_clones', 'revenge_of_the_sith',
    'force_awakens', 'last_jedi', 'rise_of_skywalker', 'rogue_one', 'solo',
    'mandalorian', 'book_of_boba_fett', 'obi_wan_kenobi', 'andor', 'ahsoka',
    'clone_wars', 'rebels', 'resistance', 'bad_batch', 'visions',
    'tales_of_the_empire', 'tales_of_the_jedi']

even_weight = {film: 1 for film in keys}

# I have not given full type hints for this yet because we don't yet
# have methods attached to the models.
def distance(u1:dict, u2:dict, weights: dict=even_weight) -> int:
    '''
    u1 and u2 are dictionaries obtained from the user/profile model. They
    contain the survey result data. weight is a dictionary that contains the
    weights necessary to compute the weighted sum. adjusting an individual
    value will scale the importance of that film.
    '''
    overlap = {film: u1[film] and u2[film] for film in keys}
    sum = 0
    for film, value in overlap.items():
        if value:
            sum += weights[film]*(u1[film]-u2[film])**2
    return sum

user_zero = {film:0 for film in even_weight.keys()}
# The value can be changed depending on how we make the form.
user_max = {film:10 for film in even_weight.keys()}

def max_distance(weights) -> int:
    return distance(user_zero, user_max, weights)

def percentage_match(u1: dict, u2: dict, weights: dict=even_weight) -> int:
    m = max_distance(weights)
    return (m-distance(u1,u2,weights))/m