category_names = [
'template',
'genre',
'genre_modifier',
'perspective',
'group_name',
'character',
'character_description',
'character_description_post',
'goal_prefix',
'goal',
'setting',
'setting_description',
'theme',
'mood',
'wildcard'
];

data = `
----------------- Notes ----------------- 
• Categories are defined by #categoryname: ... #end
• <a> will be replaced with a/an depending on context
• @name@ will be replaced with a call to the corresponding generate function
• Some generate functions also accept parameters: @name:comma,separated,parameters@


----------------- TEMPLATE ----------------- 

#template:
<a> @mood@ @genre@ game about @theme@ and @theme@, @wildcard@
<a> @mood@ @genre@ game @wildcard@ where you play as @character@ @goal@
<a> @mood@ @genre@ game about @theme@, where you play as @character:nopost@ @setting@
<a> @mood@ @genre@ game that takes place @setting@, where you play as @character@ @goal@
<a> @mood@ game about @theme@ [set, that takes place] @setting@, where you play as @character@ @goal@
<a> @mood@ [mix between, mashup of, blend of] the @genre:nomods@ and @genre:nomods@ game genres, where you play as @character@ @goal@
<a> @mood@ [mix between, mashup of, blend of] the @genre:nomods@ and @genre:nomods@ game genres, which tells a story of @theme@ and @theme@
<a> @mood@ @genre@ game @wildcard:always@
<a> @mood@ [mix between, mashup of, blend of] the @genre:nomods@ and @genre:nomods@ game genres @wildcard:always@
#end

----------------- GENRE (a ... game) ----------------- 
#genre:
platformer
metroidvania
endless runner
shooter
bullet hell
sports
strategy
puzzle
stealth
role-playing
roguelike
dating
survival
horror
card
rhythm
adventure
tower-defense
clicker
hack-and-slash
educational
text-adventure
typing
sandbox
programming
[boat, car, kart, bike, helicopter] racing
[theme-park, business-management, city-management, farming] simulation
[fishing, football, cricket, basketball, hockey, tennis, table tennis, baseball, golf, volleyball, fencing, sword fighting, horse riding, snow boarding, skiing, skateboarding]
#end

// a ... #genre game
#genre_modifier:
open-world
turn-based
sci-fi
fantasy
#end

// a ... #genre game
#perspective:
2D
3D
first-person
third-person
top-down
isometric
side-view
#end

----------------- CHARACTERS (you play as a...) ----------------- 
#group_name:
group
[faction, gang, family, band, horde]
[organization, league]
#end

#character:
alien
monster
wizard
witch
adventurer
assassin
sailor
chef
robot
ghost
human
skeleton
[duck, goose, penguin, fish, whale, shark]
[puppy, dog, kitten, cat, mammoth, dinosaur, dragon]
[bee, ant, fly, mosquito]
snowman
scientist
programmer
student
youtuber
influencer
celebrity
president
politician
[businessman, businesswoman]
emperor
god
ninja
technophobe
vampire
hacker
zombie
action figure
geometric shape
thief
pirate
artificial intelligence
[prince, princess, king, queen]
[grandmother, grandfather]
[troll, goblin, orc, dwarf]
knight
farmer
astronaut
pilot
chocolatier
archeologist
doctor
police officer
detective
pyromaniac
gamer
tax collector
plumber
electrician
mechanic
#end

----------------- DESCRIPTIONS (you play as a ... character) ----------------- 
#character_description:
tiny
gigantic
lonely
time-travelling
evil
easily-frightened
extremely [attractive, short, tall, intimidating, clumsy]
good-looking
courageous
anxious
forgetful
famous
shy
scary-looking
one-eyed
bored
ambitious
power-hungry
two-headed
wise
elderly
greedy
invisible
magical
blind
peace-loving
polite
worried
rude
genetically [modified, enhanced]
grumpy
charming
energetic
imaginary
[unfriendly, friendly]
nervous
optimistic
pessimistic
undead
quirky
sarcastic
well-dressed
lazy
talkative
royal
cunning
playful
penniless
wealthy
impatient
wind-up
law-[abiding,breaking]
over-enthusiastic
#end


#character_description_post:
from [the future, another planet, another dimension, an alternate reality, a parallel universe]
with no [friends, money, morals, soul]
who loves [kittens, puppies, rainbows, cars, spaceships, animals, flowers, long walks, writing, baking, gardening, fishing, fire]
who (is,are) passionate about [recycling, model trains, education, animal-rights, stamp-collecting, arcade games, board games, tea]
with [a tragic backstory, an adorable pet, a secret superpower, a secret identity]
who (can,can) [fly, bend time, turn invisible, teleport, summon spirits]
with a debilitating fear of [heights, ghosts, flying, water, being alone, people, blood, small spaces, crowds, spiders]
with a tendency to [overreact, faint at the sight of blood, spontaneously combust, over-share]
who (loathes,loathe) [violence, swimming, daylight, robots, humans, aliens]
with a controversial opinion on [politics, pizza toppings, education, robots, science]
who (is,are) addicted to [chocolate, pizza, fast-food, cartoons, danger, tea, coffee]
#end

----------------- GOALS (you play as a character/group of characters trying to...) ----------------- 

#goal_prefix:
[trying, attempting] to
who [desperately,] (wants,want) to
who will stop at nothing to
who (needs,need) to
#end

#goal:
find the secret to [eternal life, eternal youth, everlasting beauty]
save the world from @character:npc@
defeat @character:npc@
find [true love, a soul mate, a friend, peace and quiet]
become [filthy rich, world famous]
rule the world
find a [way home, new home, place to live]
pay off a debt
make the world a better place
make friends
[survive, avert, escape from] the [apocolypse, end of the world]
start a new [business, career, life]
pay the rent on time
leave the planet
eat more healthily
explore the [universe, world, galaxy]
solve a [mysterious, puzzling] case
[repair the, build <a>, protect the, destroy the] [spaceship, time-machine, armageddon-device]
cross [the road, a busy intersection, the galaxy, the ocean]
learn [photography, to play an instrument, to cook, to stop caring what others think]
found a new [religion, city, colony, school, guild, cult]
start a new life [on mars, in the country, in the city, on the moon, as a shepherd]
escape from @character:npc@
[gain the respect of @character:npc@, win the affection of @character:npc@]
rescue @character:npc@
#end

----------------- SETTINGS (a game set... / that takes place...) ----------------- 
#setting:
on <a> @setting_description@ [planet, spaceship, moon, star, rainbow, island, train, boat, mountain, rollercoaster, street, motorbike, bicycle, shipwreck, bouncy castle]
in <a> @setting_description@ [city, warehouse, graveyard, village, kingdom, sewer, shopping mall, nightclub, cave, labyrinth, park, parking lot, kitchen]
in <a> @setting_description@ [casino, library, junkyard, basement, dungeon, prison, tavern, resturant, cinema, valley, mansion, forest, jungle, office, hotel]
in the [distant future, distance past, recent past, near future, month of December, week before Christmas]
[in an alternate reality, in outer space, underwater, underground, in summer, in winter, in spring, in autumn]
inside [your head, a computer, a submarine, a dream, a nightmare, a bunker, a dumpster]
during [a great drought, the end of the world, an alien invasion, a massive flood, a volcano eruption, a terrible disaster, the reign of the @character_description@ king, the reign of the @character_description@ queen, the Renaissance, a war, a time of peace, a birthday party, an office party]
on the back of <a> @character_description@ [elephant, whale, turtle, giant, dolphin]
#end

Note: describes a location
#setting_description:
tiny
microscopic
enormous
spooky
alien
futuristic
ancient
forgotten
mysterious
forbidden
dangerous
holy
bustling
creepy
abandoned
popular
strange-smelling
hypnotic
radioactive
colourful
never-ending
strangely-decorated
tastefully-decorated
rat-infested
lively
vibrant
uninhabited
poorly-decorated
astonishing
critically-acclaimed
beautiful
boring
deadly
grubby
exotic
fabulous
glamorous
gloomy
well-hidden
undiscovered
jolly
luxurious
quaint
quirky
old-fashioned
unfashionable
modern
flying
floating
sinking
burning
mystical
magical
frozen
royal
#end

----------------- THEMES (a game about...) ----------------- 
#theme:
survival
cooking
farming
love
death
power
prejudice
hope
war
peace
friendship
revenge
betrayal
forgiveness
crime
punishment
aliens
isolation
chaos
the circle of life
fate
growing up
immortality
technology
totalitarianism
religion
tradition
mental illness
space travel
exploration
greed
justice
patriotism
corruption
exploitation
the end of the world
unfairness
hacking
artificial intelligence
the singularity
robot rights
extraterrestial life
illness
life after death
dancing
singing
bee-keeping
engineering
sewing
fashion
baking
stamp collecting
art
gardening
happiness
sadness
the concept of fun
chivalry
stereotypes
family
relationships
truth
lies
bravery
cowardice
mathematics
#end

----------------- MOOD (a ... game) ----------------- 
#mood:
unique
frustrating
challenging
rage-inducing
stressful
relaxing
meditative
calming
thought-provoking
addictive
[humorous, amusing]
whimsical
[scary, frightening, terrifying]
innovative
inspiring
groovey
artsy
upbeat
violent
peaceful
dreamy
stylish
short-and-sweet
slow-paced
intense
nostalgic
[strange, quirky, unusual] little
satirical
#end

----------------- WILDCARDS (a game ...) ----------------- 

#wildcard:
with <a> [hand-drawn, watercolour, graphic-novel, claymation, retro, low-poly, dream-like, abstract, cardboard-cutout] art style
controlled with [just one button, only two buttons, only the mouse, your voice]
in which [you explode, time freezes, time slows down, time speeds up, you shrink, you get bigger, the game gets harder] whenever you [stop moving, jump]
in which you only have one [life, item, inventory-slot, chance]
with <a> [time-travelling, grappling-hook] mechanic
which teaches the player [moral lessons, mathematics, geography, science, history, programming, cooking, random trivia]
with challenging boss fights
with a [cooperative, competitive] splitscreen mode
with an emphasis on [crafting, exploration, alchemy, creativity]
in which you need to collect [dreams, colours, memories]
with unlockable achievements
with lots of [procedurally generated content, character customization options]
with <a> [online,] leaderboard
designed with speedrunning in mind
with destructible terrain
with a built-in level editor
with a [funny, moving] story
#end
`;