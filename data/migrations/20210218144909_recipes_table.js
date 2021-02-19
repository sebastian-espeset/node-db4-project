
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table=>{
        table.increments("recipe_id")
        table.string("recipe_name")
        table.integer("ingredients_id")
            .unsigned()
            .notNullable()
            .references("ingredients_id")
            .inTable("ingredients_instructions")
            .onDelete("RESTRICT")
    })
    .createTable("ingredients_instructions", table=>{
        table.increments("ingredients_id")
        table.string("ingredient_name").unique().notNullable()
        table.string("quantity").notNullable();
        table.integer("cooking_ins_id")
            .unsigned()
            .notNullable()
            .references("cooking_ins_id")
            .inTable("cooking_instructions")
            .onDelete("RESTRICT")
    })
    .createTable("cooking_instructions", table=>{
        table.increments("cooking_ins_id")
        table.string("cooking_instruction")
    })


};

exports.down = function(knex) {
  return knex.schema
    .dropIfTableExists("cooking_instructions")
    .dropIfTableExists("ingredients_instructions")
    .dropIfTableExists("recipes")
};
