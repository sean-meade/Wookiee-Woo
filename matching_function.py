# This file contains the relevant functions for matching users 
# based on their SurveyResults

# This dictionary contains weights for the different fields.
# These weights are adjustable and subject to change.
# There is maybe a more efficient way to store these things.
even_weight = {
    'a_new_hope':1,
    'empire_strikes_back':1,
    'return_of_the_jedi':1,
    'phantom_menace':1,
    'attack_of_the_clones':1,
    'revenge_of_the_sith':1,
    'force_awakens':1,
    'last_jedi':1,
    'rise_of_skywalker':1,
    'rogue_one':1,
    'solo':1,
    'mandalorian':1,
    'book_of_boba_fett':1,
    'obi_wan_kenobi':1,
    'andor' :1,
    'ahsoka':1,
    'clone_wars':1,
    'rebels':1,
    'resistance':1,
    'bad_batch':1,
    'visions':1,
    'tales_of_the_empire':1,
    'tales_of_the_jedi':1,
}

# I have not given full type hints for this yet because we don't yet
# have methods attached to the models.
def distance(user_1,user_2,weight:dict=even_weight) -> int:
    # these should be a dictionary or named tuple
    u1=user_1.formatted_results
    u2=user_2.formatted_results
    sum = 0
    for film in u1.keys():
        if u1[film] and u2[film]:
            sum += weight[film]*(u1[film]-u2[film])**2
    return sum