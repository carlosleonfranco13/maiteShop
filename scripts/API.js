const url = 'http://localhost:5000/productos';

// Cuando se crea un nuevo Producto
export const addProducts = async producto => {

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( producto ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = '/screens/products.html';
    } catch (error) {
        console.log(error);
    }
}

// Obtiene todos los Productos
export const obtenerProductos = async () => {
    try {
        const resultado = await fetch(url);
        const productos = await resultado.json();
        return productos; 
    } catch (error) {
        console.log(error);
    }
}

// Elimina un Producto
export const eliminarProducto = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

// Obtiene un Producto por su iD
export const obtenerProducto = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const producto = await resultado.json();
        return producto;
    } catch (error) {
        console.log(error);
    }
}

// Obtener VerProducto Solo por su iD
export const verProducto = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const producto = await resultado.json();
        return producto;
    } catch (error) {
        console.log(error);
    }
}

// Actualiza un registro
export const editarProducto = async producto => {
    try {
        await fetch(`${url}/${producto.id}`, {
            method: 'PUT',
            body: JSON.stringify(producto),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = '/screens/products.html';
    } catch (error) {
        console.log(error)
    }
}