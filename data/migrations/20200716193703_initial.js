exports.up = async function(knex) {
  await knex.schema.createTable("sections", (table) => {
    table.increments()
    table.text("section_no").notNullable()
    table.text("section_name").notNullable()
  })

	await knex.schema.createTable("parts", (table) => {
		table.increments()
    table.text("part_no").notNullable()
    table.integer("quantity")
		table.text("part_name").notNullable()
    table.integer("section_id")
        .notNullable()
        .references("id")
        .inTable("sections")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("parts")
  await knex.schema.dropTableIfExists("sections")
}
