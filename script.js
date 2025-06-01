// Example of a simple interactive script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to my portfolio!');
});

const toggleButton = document.querySelector('.navbar-toggle');
const links = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active');
});