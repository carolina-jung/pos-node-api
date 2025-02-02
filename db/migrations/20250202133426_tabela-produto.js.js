/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('produtos', table => {
    table.increments('id').primary();
    table.string('descricao', 255).notNullable();
    table.string('marca', 128).notNullable();
    table.decimal('preco', 10, 2).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('produtos');
};
