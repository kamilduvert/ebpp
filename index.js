const toggleMenu = document.querySelector('#toggle');
const navbarUl = document.querySelector('.header__navbar__list');
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

