const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const logo = document.getElementById('logo');
const searchBar = document.getElementById('search-bar');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

logo.addEventListener('click', () => {
    alert('Welcome to Spotify!');
});

searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        alert(`Searching for: ${searchBar.value}`);
    }
});