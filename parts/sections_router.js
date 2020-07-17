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

router.get("/:id/parts", async(req, res, next) => {
  try {
    const parts = await db.findPartsBySection(req.params.id)
    if (!parts) {
      return res.status(404).json({
				message: "Parts not found."
			})
		} else {
			return res.status(200).json(parts)
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

router.post("/:id/parts", async(req,res,next) => {
  try {
    req.body.section_id = req.params.id
		res.status(201).json(await db.createPartInSection(req.params.id,req.body))
	} catch (err) {
		next(err)
	}
})

router.put("/:id", async(req,res,next)=>{
  try {
    const section = await db.update(req.params.id,req.body)
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

router.delete("/:id", async(req, res,next)=> {
  try {
    const success = await db.remove(req.params.id)
    if (success===1) {
      return res.status(200).json({
        message: "Section removed."
      })
    } else {
      return res.status(404).json({
        message: "Section not found."
      })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
