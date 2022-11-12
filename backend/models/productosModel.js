var pool = require('./bd');

async function getProductos() {
    try {
        var query = 'select * from producto';
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function insertarProducto(obj) {
    try {
        var query = 'insert into producto set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {getProductos, insertarProducto}