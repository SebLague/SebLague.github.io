const scriptsToLoad = 
[
    "categories/cat_setting_description.js",
    "categories/cat_goal.js",
    "categories/cat_character_description.js",
    "categories/cat_group_name.js",
    "categories/cat_genre_modifier.js",
    "categories/cat_genre.js",
    "categories/cat_theme.js",
    "categories/cat_character_description_post.js",
    "categories/cat_goal_prefix.js",
    "categories/cat_setting.js",
    "categories/cat_mood.js",
    "categories/cat_character.js",
    "categories/cat_template.js",
    "categories/cat_wildcard.js",
    "categories/cat_perspective.js"
];

window.addEventListener("load", () => 
{
    scriptsToLoad.forEach(scriptName =>
        {
            const newScriptTag = this.document.createElement("script");
            newScriptTag.src = scriptName;
            document.body.appendChild(newScriptTag);
        });
    }
);