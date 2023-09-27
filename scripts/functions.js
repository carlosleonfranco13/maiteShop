export function mostrarAlerta(msg) {
    const alerta = document.querySelector('.alerta');

    if(!alerta) {
        const alerta = document.createElement('p');
        alerta.classList.add('alerta');
        alerta.innerHTML = `
            <strong>Error!</strong>
            <span>${msg}</span>
        `;
        const form = document.querySelector('#form');
        form.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export function validar(obj) {
    return !Object.values(obj).every( input =>  input !== '');
}