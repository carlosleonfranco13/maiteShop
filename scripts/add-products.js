import { mostrarAlerta, validar } from "./functions.js";
import { addProducts } from "./API.js";

(function () {
    const form = document.getElementById('form')
    form.addEventListener('submit', validarProducto)

    function validarProducto(e) {
        e.preventDefault();
        
        const foto = document.getElementById('urlFoto').value
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const description = document.getElementById('description').value

        const producto = {
            foto,   
            name,
            price,
            description
        }

        if(validar(producto)) {
            // MOstrar msj.
            mostrarAlerta('Todos los campos son obligatorios');
            return
        }
        addProducts(producto)
    }

    

}) ()




























/*import { mostrarAlerta } from "./functions.js";
import { addProduct } from "./API.js";

(function() {

    const form = document.getElementById('form');

    form.addEventListener('submit', validateInfo);
    
    function validateInfo(e) {
        e.preventDefault();
        
        const url = document.querySelector('.product-add__inputURL-img').value;
        const name = document.querySelector('.product-add__input-name').value;
        const precio = document.querySelector('.product-add__input-precio').value;

        const product = {
            url,
            name,
            precio
        }

        if(validar(product)) {
            // Mostrar Msj
            mostrarAlerta('Todos los campos son obligatorios');
            return
        }
        addProduct(product) 
    }

    function validar(obj) {
        return !Object.values(obj).every(input => input !== '');
    }

})();*/