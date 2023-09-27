// =============== Carousel ================= //
const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

function setIndex() {
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -33.3333 + '%)';
}

document.querySelectorAll('.controls li').forEach( function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    })
})

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
})

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
})
// =============== Carousel END ================= //

// ======== Animation arrow icon of "Iniciar sesión" & Menu tipo de usuario ========== //
const iconArrow = document.querySelector('.sesion-contain')
const icon = document.querySelector('.sesion-icon-arrow')
const userKind = document.querySelector('.userKind')

iconArrow.addEventListener("click", () => {
    if( userKind.style.display === 'block' ) {
        userKind.style.animation = 'moveUp .3s ease-in-out'
        setTimeout(() => {
            userKind.style.display = 'none';
        }, 100);
        icon.style.transform = 'rotate(0deg)';
        icon.style.transition = 'transform .2s';
    }else{
        icon.style.transform = 'rotate(180deg)';
        icon.style.transition = 'transform .2s';
        userKind.style.display = 'block';
        userKind.style.animation = 'moveDown .3s ease-in-out';
    }
})

// ================ Ventana Modal Cerrar ================= //
const closeModal = document.querySelector('.modal__content-close'); 
const modal = document.querySelector('#modal');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

// ================ Ventana Modal Abrir ================= //
const abrirModal = document.querySelector('.userKind__contain-admin');

abrirModal.addEventListener('click', () => {
    modal.style.display = 'flex'
})

// ================ Hacer Login en el Modal ================= //
function login() {
    const user = document.getElementById('usuario').value
    const pass = document.getElementById('contraseña').value

    if(user === 'Maite' && pass === '123') {
        window.location = '/screens/products.html'
    }
}