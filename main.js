let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-menu');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 400,
    delay: 50,
    reset: true
})

sr.reveal('.text',{delay: 50, origin: 'top'})
sr.reveal('.form-container form',{delay: 150, origin: 'left'})
sr.reveal('.heading',{delay: 50, origin: 'left'})
sr.reveal('.ride-container .box',{delay: 300, origin: 'left'})
sr.reveal('.service-container .box',{delay: 300, origin: 'left'})
sr.reveal('.about-container .box',{delay: 300, origin: 'left'})
sr.reveal('.reviews-container',{delay: 50, origin: 'left'})
sr.reveal('.newsletter .box',{delay: 50, origin: 'bottom'})
sr.reveal('.about-container',{delay: 50, origin: 'bottom'})
sr.reveal('.about-img',{delay: 50, origin: 'bottom'})