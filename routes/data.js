const router = require('express').Router()
const dataController = require("../controllers/data")

router.get("/list", dataController.getList)
router.get("/detail/:listId", dataController.getDetail)
router.get("/delete/:listId", dataController.delete)
router.get("/edit/:listId", dataController.edit)
router.get("/addlist", dataController.addList)
router.post("/edit/:listId", dataController.editPost)
router.post("/addlist", dataController.addListPost)

module.exports = router