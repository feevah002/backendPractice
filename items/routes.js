const router = require("express").Router()
const itemController = require("./controller")

router.get("/", itemController.items)
router.get("/:id", itemController.findById)
router.post("/", itemController.createNewItem)
router.put("/:id", itemController.editItem)
router.delete("/:id", itemController.removeItem)


module.exports = router