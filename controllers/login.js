const adminModel = require('../models/admin')
module.exports = {
    login: (req, res) => {
        res.render("login")
    },
    loginPost: async (req, res) => {
        const admin = await adminModel.findOne()
        const {body} = req
        const data = {
            ...body,
        }
        if(data.password === admin.password && data.username === admin.username) {
            req.session.name = "admin"
            res.redirect("/home")
        } else {
            res.send("Password atau username salah")
        }
    }
}