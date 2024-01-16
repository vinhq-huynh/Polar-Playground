const navbar_container = document.querySelector('.nav-bar-container');
const navlink_container = document.querySelector('.nav-link-container');

// Handling click hambuger menu bar
document.querySelector('.fa-bars').addEventListener('click', () => {
    navbar_container.classList.toggle('nav-bar-dark');
    navlink_container.classList.toggle('d-none');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar_container.classList.add('nav-bar-scrolled');
        navlink_container.style.top = "3.5rem";
    } else if (window.scrollY <= 30) {
        navbar_container.classList.remove('nav-bar-scrolled');
        navlink_container.style.top = "5rem";
    }
})