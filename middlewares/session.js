function authentication(req, res, next) {
    if (req.session.name) {
        next();
    } else {
        res.redirect("/");
    }
}

module.exports = authentication;