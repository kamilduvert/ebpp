const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('navbar')

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

navbar.addEventListener('click', () => {
    navbar.classList.remove('active');
})