var pool = require('./bd');

async function getProductos() {
    try {
        var query = 'select * from producto';
        var rows = await pool.query(query);
        console.log(rows);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getProducto(id) {
    try {
        var query = 'select * from producto where id = ?';
        var rows = await pool.query(query, [id]);
        console.log(rows);
        return rows[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function insertarProducto(obj,img_id) {
    try {
        var query = 'insert into producto set ?,img_id = ?';
        var rows = await pool.query(query, [obj,img_id]);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function deleteProducto(id) {
    try {
        var query = 'delete from producto where id = ?';
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function updateProducto(obj, id) {
    try {
        var query = 'update producto set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {getProductos, getProducto, insertarProducto, deleteProducto, updateProducto}