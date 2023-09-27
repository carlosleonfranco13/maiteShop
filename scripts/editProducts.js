import { obtenerProducto, editarProducto } from "./API.js";
import { mostrarAlerta, validar } from "./functions.js";

(function() {

    // Campos del formualrio 
    const fotoInput = document.querySelector('#urlFoto');
    const nameInput = document.querySelector('#name');
    const priceInput = document.querySelector('#price');
    const descriptionInput = document.querySelector('#description');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);

        const idProducto = parseInt(parametrosURL.get('id'));

        const producto = await obtenerProducto(idProducto)

        mostrarProducto(producto);

        // Submit al Formulario
        const formulario = document.querySelector('#form');
        formulario.addEventListener('submit', validarProducto);
    });

    function mostrarProducto(producto) {
        const { foto, name, price, description, id } = producto;

        fotoInput.value = foto;
        nameInput.value = name;
        priceInput.value = price;
        descriptionInput.value = description;
        idInput.value = id;
    }

    function validarProducto(e) {
        e.preventDefault();

        const producto = {
            foto: fotoInput.value,   
            name: nameInput.value, 
            price: priceInput.value, 
            description: descriptionInput.value, 
            id: parseInt(idInput.value)
        }
        if(validar(producto)) {
        // Mostrar Mensaje
        mostrarAlerta('Todos los campos son obligatorios');
        return;
        }

        // Reescribe el Objeto
        editarProducto(producto);
    }

}) ();