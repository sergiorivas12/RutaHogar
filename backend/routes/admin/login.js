var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('admin/login', {
        title: 'Sesiones ',
        layout: 'admin/layout'
    });
});

router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.user;
        var password = req.body.password;
        var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);
        if (data != undefined) {
            req.session.user = data.usuario;
            req.session.user_id = data.id;
            res.redirect('/admin/bienvenido');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }

    } catch (error) {
        console.log(error);
    }
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
