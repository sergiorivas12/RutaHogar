var pool = require('./bd');

async function getProductos(params) {
    try {
        var query = 'select * from producto';
        if (params !== undefined && Object.keys(params).length !== 0) {
            var queryPrecios = '';
            if (Object.keys(params).includes('minimo')) {
                var minimo = ' and precio >=' + params['minimo'];
                queryPrecios += minimo;
                delete params['minimo'];
            }
            if (Object.keys(params).includes('maximo')) {
                var maximo = ' and precio <=' + params['maximo'];
                queryPrecios += maximo;
                delete params['maximo'];
            }
            if (Object.keys(params).length == 0) {
                query += " where 1=1";
            } else {
                query += " where ?";
            }
            query += queryPrecios;
        }
        var rows = await pool.query(query, [params]);
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

async function insertarProducto(obj, img_id) {
    try {
        var query = 'insert into producto set ?,img_id = ?';
        var rows = await pool.query(query, [obj, img_id]);
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