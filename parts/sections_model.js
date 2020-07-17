const db = require("../data/config")

function find() {
	return db("sections")
}

function findById(section_no) {
	return db("sections").where({ section_no }).first()
}

async function create(data) {
	const [section_no] = await db("sections").insert(data)
	return findById(section_no)
}

async function update(section_no, data) {
	await db("sections").where({ section_no }).update(data)
	return findById(section_no)
}

function remove(section_no) {
	return db("sections").where({ section_no }).del()
}

module.exports = {
	find,
	findById,
	create,
	update,
	remove,
}
