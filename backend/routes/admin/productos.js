var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET users listing. */
router.get('/', async function (req, res, next) {
    let productos = await productosModel.getProductos();
    productos = productos.map(producto => {
        if (producto.img_id) {
            const imagen = cloudinary.image(producto.img_id, {
                width: 100,
                height: 100,
                crop: 'fill',
            });
            return {
                ...producto,
                imagen
            }
        } else {
            return {
                ...producto,
                imagen: ''
            }
        }
    });

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
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            var imagen = req.files.img_id;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }
        if (req.body.nombre != "" && req.body.precio != "") {
            await productosModel.insertarProducto(req.body, img_id);
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
    let producto = await productosModel.getProducto(id);
    if (producto.img_id) {
        await (destroy(producto.img_id));
    }
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
        let img_id = null;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
            borrar_img_vieja = true;
        }
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.img_id;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
            borrar_img_vieja = true;
        } else {
            img_id = req.body.img_original;
        }

        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }
        let obj = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            sn_nuevo: (req.body.sn_nuevo ? req.body.sn_nuevo : 0),
            sn_home: (req.body.sn_home ? req.body.sn_home : 0),
            img_id
        }
        await productosModel.updateProducto(obj, req.body.id);
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