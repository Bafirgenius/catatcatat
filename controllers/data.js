const postModel = require('../models/post')
const adminModel = require('../models/admin')

module.exports = {
    getList: async (req, res) => {
        try {
            const customers = await postModel.find()
            console.log(customers, "ini cust")
            res.render("listCustomer", {customers})
        } catch (error) {
            res.send(error)
        }
    },
    getDetail: async (req, res) => {
        try {
            const listId = req.params.listId
            const customers = await postModel.findOne({_id:listId})
            console.log(customers, "ini customers")
            res.render("detail", {customers})
            // res.send({data:customers})
        }catch(err) {
            res.send(err)
        }
    },
    delete:  async (req, res) => {
        try {
            const listId = req.params.listId
            const customers = await postModel.findByIdAndRemove({_id:listId})
            res.redirect("/list")
            // res.send({data:customers})
        }catch(err) {
            res.send(err)
        }
    },
    edit: async (req, res) => {
        try {
            const listId = req.params.listId
            const customers = await postModel.findOne({_id:listId})
            console.log(customers, "ini customers")
            res.render("edit", {customers})
            // res.send({data:customers})
        }catch(err) {
            res.send(err)
        }
    },
    editPost: async (req, res) => {
        try {
            const listId = req.params.listId
            const { body } = req;
            const newData = {
                ...body,
            }
            const customers = await postModel.findByIdAndUpdate({_id:listId}, newData)
            res.redirect(`/detail/${listId}`)
            // res.send({data:customers})
        }catch(err) {
            res.send(err)
        }
    },
    addList: (req, res) => {
        res.render("addListCustomer")
    },
    addListPost: async (req, res) => {
        const { body } = req;
        //insert routerointment
        const newPost = {
          ...body,
          createdAt: new Date().toLocaleDateString()
        };
        try {
        const postData = new postModel(newPost);
        const admin = await adminModel.find();
        await postData.save();
        console.log(postData)
        console.log(admin,"ini admin")
        res.redirect("/list")
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
    }
}