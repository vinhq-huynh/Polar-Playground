const navbar_container = document.querySelector('.nav-bar-container');

// Handling click hambuger menu bar
document.querySelector('.fa-bars').addEventListener('click', () => {
    console.log("YO");
});

window.addEventListener('scroll', () => {
    // if (window.scrollY > 0) {
    //     bg1.classList.add('bg-1-scrolled');
    // } else if (window.scrollY <= 0) {
    //     bg1.classList.remove('bg-1-scrolled');
    // }

    if (window.scrollY > 50) {
        navbar_container.classList.add('nav-bar-scrolled');
    } else if (window.scrollY <= 50) {
        navbar_container.classList.remove('nav-bar-scrolled');
    }
})