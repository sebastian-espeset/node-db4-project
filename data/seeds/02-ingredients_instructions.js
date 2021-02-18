exports.seed = function(knex,Promise){
    return knex("ingredients_instructions").insert([
        {ingredient_name:"eggs",quantity:"2 dozen", cooking_ins_id:1},
        {ingredient_name:"flour",quantity:"3 cups", cooking_ins_id:1},
        {ingredient_name:"sugar",quantity:"1/4 cup", cooking_ins_id:2}
    ])
}