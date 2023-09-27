import {  obtenerProductos, verProducto } from "./API.js";

(function() {
    const contenido = document.querySelector('.onlyProduct');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);

        const idProducto = parseInt( parametrosURL.get('id') );

        const producto = await verProducto(idProducto);

        watchProduct(producto);
    });

    async function watchProduct(producto) {
            const { foto, name, description, price, id } = producto;
            const contentProduct = document.createElement('div');
            contentProduct.classList.add('onlyProduct__container');

            contentProduct.innerHTML += `
                <img class="onlyProduct__foto" src="${foto}">
                <div class="onlyProduct__contain">
                    <h1 class="onlyProduct__title">${name}</h1>
                    <p class="onlyProduct__description">
                        ${description}
                    </p>
                    <span class="onlyProduct__price">$ ${price},00</span>
                    <a class="onlyProduct__comprar" href="index.html">Comprar</a>
                </div>
            `;

            contenido.appendChild(contentProduct);
    }

}) ();