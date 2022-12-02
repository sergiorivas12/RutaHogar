var express = require('express');
var router = express.Router();
var productosModel = require('../models/productosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/productos', async function (req, res, next) {
    console.log(req.query);
    let productos = await productosModel.getProductos(req.query);
    productos = productos.map(producto => {
        if (producto.img_id) {
            const imagen = cloudinary.url(producto.img_id, {});
            return {
                ...producto,
                caracteristicas: producto.descripcion.split(","),
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

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'sergio.rivas12@gmail.com',
        subject: 'Contacto Web',
        html: req.body.nombre + ' se contacto a traves de la web y quiere mas informacion a este correo: ' + req.body.email
                + '</br> Ademas, hizo el siguiente comentario: ' + req.body.mensaje
                + '</br> su tel es: ' + req.body.telefono
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    });

    await transport.sendMail(mail);

    res.status(201).json({
        error: false,
        message: 'Mensaje Enviado',
    });
});

module.exports = router;
