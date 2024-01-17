const navbar_container = document.querySelector('.nav-bar-container');
const nav_links = document.querySelector('.nav-links');

// Handling click hambuger menu bar
document.querySelector('.fa-bars').addEventListener('click', () => {

    navbar_container.classList.toggle('nav-bar-dark');
    nav_links.classList.toggle('d-none');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar_container.classList.add('nav-bar-scrolled');
        nav_links.style.top = "3.5rem";
    } else if (window.scrollY <= 30) {
        navbar_container.classList.remove('nav-bar-scrolled');
        nav_links.style.top = "5rem";
    }
})