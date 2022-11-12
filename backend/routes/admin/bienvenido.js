var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('admin/bienvenido',{
        layout  : 'admin/layout',
        usuario : req.session.user
    });
});

module.exports = router;