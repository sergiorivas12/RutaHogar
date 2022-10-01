var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var conocido = Boolean(req.session.user);
  res.render('admin/login',{
      title     : 'Sesiones ',
      conocido  : conocido,
      nombre    : req.session.user,
      layout    : 'admin/layout'
  });
});

router.post('/ingresar', function(req,res){
    if(req.body.user){
        req.session.user = req.body.user;
    }
    res.redirect('/');
});

router.get('/salir', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
