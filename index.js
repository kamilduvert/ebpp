const toggleMenu = document.querySelector('#toggle-menu');
const navbarUl = document.querySelector('.navbar-list');
const openIcon = document.querySelector('#open-icon');
const closeIcon = document.querySelector('#close-icon');


toggleMenu.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
    openIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
})

navbarUl.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
})

