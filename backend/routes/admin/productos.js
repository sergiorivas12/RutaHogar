var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    let productos = await productosModel.getProductos();
    res.render('admin/productos', {
        layout: 'admin/layout',
        usuario: req.session.user,
        productos: productos
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout',
        usuario: req.session.user
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.nombre != "" && req.body.precio != "") {
            await productosModel.insertarProducto(req.body);
            res.redirect('/admin/productos');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                usuario: req.session.user,
                error: true,
                message: 'Hay campos que son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            usuario: req.session.user,
            error: true,
            message: 'No se cargo el Producto'
        });
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    let id = req.params.id;
    await productosModel.deleteProducto(id);
    res.redirect('/admin/productos');
});

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let producto = await productosModel.getProducto(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        usuario: req.session.user,
        producto: producto
    });
});

router.post('/modificar', async (req, res, next) => {
    try {
        let obj = {
            nombre : req.body.nombre,
            precio : req.body.precio,
            descripcion : req.body.descripcion
        }
        await productosModel.updateProducto(obj,req.body.id);
        res.redirect('/admin/productos');

    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            usuario: req.session.user,
            error: true,
            message: 'No se modifico el Producto'
        });
    }
});

module.exports = router;