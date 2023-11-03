const navbar = document.querySelector('.navbar');
const hs_item_imgs = document.querySelectorAll('.hs-item-img');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else if (window.scrollY <= 50) {
        navbar.classList.remove('navbar-scrolled')
    }
})

window.addEventListener('scrollX', () => {
    for (var item of hs_item_imgs) {
        if (item.getBoundingClientRect().left < window.screen.width / 2) {
            item.classList.add('hs-item-img-focus');
        }
        else if (item.getBoundingClientRect().left >= window.screen.width / 2) {
            item.classList.remove('hs-item-img-focus');
        }
    }
})
