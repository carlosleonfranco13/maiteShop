import { obtenerProductos, eliminarProducto } from "./API.js";

(function() {
    const listado = document.querySelector('.kindProduct__container');
    document.addEventListener('DOMContentLoaded', mostrarProductos);
    listado.addEventListener('click', confirmarEliminar)

    async function mostrarProductos() {
        const productos = await obtenerProductos();

        productos.forEach(producto => {
            const { foto, name, price, description, id } = producto;
            const card = document.createElement('div');
            card.classList.add('kindProduct__container-product');

            card.innerHTML += `
                <div class="btnsDelEdit">
                    <a><img class="btnDelete" src="/assets/btnDelete.svg" data-producto="${id}"></a>
                    <a href="/screens/editProducts.html?id=${id}"><img class="btnEdit" src="/assets/btnEdit.svg"></a>
                </div>
                <img class="product__photo" src=${foto} alt="product__photo">
                <h1 class="product__title">${name}</h1>
                <p class="product__price">$ ${price},00</p>
                <a class="product__ver" href="/screens/product.html?id=${id}" target='blank'>Ver producto</a>
            `;

            listado.appendChild(card);
        });
    }

    function confirmarEliminar(e) {
        if(e.target.classList.contains('btnDelete')) {
            const productoId = parseInt (e.target.dataset.producto);

            const confirmar = confirm('¿Deseas eliminar este registro?');

            if (confirmar) {
                eliminarProducto(productoId);
            }
        }
    }    

    
})();