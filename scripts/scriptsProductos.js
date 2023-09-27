// =========================== Productos.html =========================== //

// ===  Animation arrow icon of "Iniciar sesión" & Menu tipo de usuario === //
const productIconArrow = document.querySelector('.product-sesion-contain');
const productIcon = document.querySelector('.product-sesion-icon-arrow');
const productUserKind = document.querySelector('.product-userKind');

productIconArrow.addEventListener('click', () => {
    if (productUserKind.style.display === 'block') {
        productUserKind.style.animation = 'moveUp .3s ease-in-out'
        setTimeout(() => {
            productUserKind.style.display = 'none';
        }, 100);
        productIcon.style.transform = 'rotate(0deg)';
        productIcon.style.transition = 'transform .2s';
    } else {
        productIcon.style.transform = 'rotate(180deg)';
        productIcon.style.transition = 'transform .2s';
        productUserKind.style.display = 'block';
        productUserKind.style.animation = 'moveDown .3s ease-in-out';
    }
})

// ===  Cerrar sesión y volver a index.html === //
const cerrarS = document.querySelector('.cerrarS');
cerrarS.addEventListener('click', () => {
    window.location.href="index.html";
})

// ===  Redirect Button Agg New product === //
const aggProduct = document.querySelector('.aggButton');
aggProduct.addEventListener('click', () => {
    window.location.href='/screens/add-products.html';
})