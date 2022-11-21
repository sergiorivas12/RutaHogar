var express = require('express');
var router = express.Router();
var productosModel = require('../models/productosModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/productos', async function (req, res, next) {
    let productos = await productosModel.getProductos();
    productos = productos.map(producto => {
        if (producto.img_id) {
            const imagen = cloudinary.url(producto.img_id, {});
            return {
                ...producto,
                caracteristicas : producto.descripcion.split(","),
                imagen
            }
        } else {
            return {
                ...producto,
                imagen: ''
            }
        }
    });
    console.log(productos);
    res.json(productos);
});

module.exports = router;
