module.exports = {
    auth: async (req, res, next) => {
        try {
            if (req.session && req.session.user_id) {
                return next();
            } else {
                return res.redirect('/admin/login');
            }
        } catch (error) {
            console.log(error);
        }
    },

    perfil: async (req, res, next) => {
        try {
            if (req.session && req.session.perfil_id == 1) {
                return next();
            } else {
                res.render('admin/noAccess', {
                    layout: 'admin/layout',
                    error: true
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
};