var express = require('express');
var router = express.Router();
var productosModel = require('../models/productosModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/productos', async function (req, res, next) {
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
    res.json(productos);
});

module.exports = router;
