module.exports = {
    auth: function (req, res, next) {
        if (req.session && req.session.user !== undefined)
            return next();
        else
            return res.redirect('/admin/login');
    }
};