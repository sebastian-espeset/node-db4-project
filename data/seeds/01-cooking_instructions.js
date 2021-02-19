exports.seed = function(knex, Promis){
    return knex("cooking_instructions").insert([
        {cooking_instruction:'whisk'},
        {cooking_instruction:'boil'},
        {cooking_instruction:'fry'},
        {cooking_instruction:'bake'}
    ])
}