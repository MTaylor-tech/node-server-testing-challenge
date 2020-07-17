const db = require("../data/config")

function find() {
	return db("sections")
}

function findById(id) {
	return db("sections").where({ id }).first()
}

function findPartsBySection(id) {
  return db("parts").select("parts.part_no","parts.part_name","parts.quantity","sections.section_no","sections.section_name").join("sections", {"parts.section_id":"sections.id"}).where("parts.section_id",id)
}

async function create(data) {
	const [id] = await db("sections").insert(data)
	return findById(id)
}

async function update(id, data) {
	await db("sections").where({ id }).update(data)
	return findById(id)
}

function remove(id) {
	return db("sections").where({ id }).del()
}

async function createPartInSection(section_id,data) {
	const [id] = await db("parts").insert(data)
	return db("parts").where({ id }).first()
}

module.exports = {
	find,
	findById,
	create,
	update,
	remove,
  findPartsBySection,
  createPartInSection,
}
