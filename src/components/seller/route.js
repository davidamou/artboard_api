const express = require("express")
const router = express.Router()
const controller = require("./controller")

router.get('/', controller.getAll)
router.get('/:id', controller.findOne)

module.exports = router