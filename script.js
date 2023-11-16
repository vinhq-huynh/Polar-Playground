const navbar = document.querySelector('.navbar');
const hs_item_imgs = document.querySelectorAll('.hs-item-img');
const bg1 = document.querySelector('.bg-1');

window.addEventListener('scroll', () => {
    // if (window.scrollY > 0) {
    //     bg1.classList.add('bg-1-scrolled');
    // } else if (window.scrollY <= 0) {
    //     bg1.classList.remove('bg-1-scrolled');
    // }

    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else if (window.scrollY <= 50) {
        navbar.classList.remove('navbar-scrolled');
    }
})

// window.addEventListener('scroll', () => {
//     for (var item of hs_item_imgs) {
//         if (item.getBoundingClientRect().left < window.screen.width / 2) {
//             item.classList.add('hs-item-img-focus');
//         }
//         else if (item.getBoundingClientRect().right < window.screen.width / 2) {
//             item.classList.remove('hs-item-img-focus');
//         }
//     }
// })
