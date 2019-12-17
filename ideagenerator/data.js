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

// ----------------- Notes ----------------- 
// • Categories are defined by #categoryname: ... #end
// • <a> will be replaced with a/an depending on context
// • @name@ will be replaced with a call to the corresponding generate function
// • Some generate functions also accept parameters: @name:comma,separated,parameters@

data = [];