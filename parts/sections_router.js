const express = require("express")
const db = require("./sections_model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await db.find())
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async(req,res,next)=> {
	try {
		const section = await db.findById(req.params.id)
		if (!section) {
			return res.status(404).json({
				message: "Section not found."
			})
		} else {
			return res.status(200).json(section)
		}
	} catch (err) {
		next(err)
	}
})

router.post("/", async(req, res,next) => {
	try {
		res.status(201).json(await db.create(req.body))
	} catch (err) {
		next(err)
	}
})

module.exports = router
