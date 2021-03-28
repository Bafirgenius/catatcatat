const router = require("express").Router()
const loginController = require("../controllers/login")
const dataRouter = require("./data")
// const authentication = require('../middlewares/session')

router.get("/", loginController.login)
router.post("/", loginController.loginPost)

// router.use(authentication);

router.use("/", dataRouter)

router.get("/home", (req, res) => {
    res.render("home")
})


module.exports = router