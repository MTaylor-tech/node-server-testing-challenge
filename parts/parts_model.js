const db = require("../data/config")

function find() {
	return db("parts")
}

function findById(id) {
	return db("parts").where({ id }).first()
}

async function create(data) {
	const [id] = await db("parts").insert(data)
	return findById(id)
}

async function update(id, data) {
	await db("parts").where({ id }).update(data)
	return findById(id)
}

function remove(id) {
	return db("parts").where({ id }).del()
}

module.exports = {
	find,
	findById,
	create,
	update,
	remove,
}
