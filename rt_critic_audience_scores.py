raw = """- Original trilogy
	- Episode IV: A New Hope, 93%, 96%
	- Episode V: The Empire Strikes Back, 95%, 97%
	- Episode VI: Return of the Jedi, 83%, 94%
- Prequel Trilogy
	- Episode I: The Phantom Menace, 53%, 59%
	- Episode II: Attack of the Clones, 65%, 56%
	- Episode III: Revenge of the Sith, 79%, 66%
- Sequel Trilogy
	- Episode VII: The Force Awakens, 93%, 85%
	- Episode VIII: The Last Jedi, 91%, 41%
	- Episode IX: The Rise of Skywalker, 51%, 86%
- Rogue One: A Star Wars story, 84%, 87%
- Solo: A Star Wars story, 69%, 63%
- live action tv series
	- The Mandalorian, 90%, 78%
	- The Book of Boba Fett, 66%, 53%
	- Obi-Wan Kenobi, 82%, 62%
	- Andor, 96%, 86%
	- Ahsoka, 86%, 69%
- animated tv series
	- The Clone Wars, 93%, 91%
	- Rebels, 98%, 84%
	- Resistance, 92%, 47%
	- The Bad Batch, 88%, 84%
	- Visions, 98%, 66%
	- Tales of the Empire, 87%, 50%
	- Tales of the Jedi, 100%, 93%"""
lines = raw.split('\n')
lines = [line.replace('%','') for line in lines if ',' in line]
triples = [line.split(', ') for line in lines]

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

RT_critic_audience = {norm_title(triple[0]):(int(triple[1]),int(triple[2])) for triple in triples}
RT_diff = {key:abs(val[0]-val[1]) for key, val in RT_critic_audience.items()}
for film in RT_diff:
    print(f"{film}: {RT_critic_audience[film]} -> {RT_diff[film]}")