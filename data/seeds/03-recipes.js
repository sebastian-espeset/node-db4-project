exports.seed=function(knex,Promise){
    return knex("recipes").insert([
        {recipe_name:'baked eggs',ingredients_id:1},
        {recipe_name:'cake',ingredients_id:2},
        {recipe_name:'lobster bisque',ingredients_id:3}
    ])
}