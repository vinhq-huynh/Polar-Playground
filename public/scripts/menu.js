document.addEventListener("DOMContentLoaded", () => {   
    var offset = 80;

    $('.navbar li a').click(function(event) {
        event.preventDefault();
        $($(this).attr('href'))[0].scrollIntoView();
        scrollBy(0, -offset);
    }); 

    // Sub menu buttons overflow check
    subMenuButtonOverflowCheck();
    
    window.addEventListener("resize", subMenuButtonOverflowCheck);

    function subMenuButtonOverflowCheck() {
        const subMenuButtons = document.querySelector(".sub-menu-buttons");
        if (subMenuButtons.scrollWidth > subMenuButtons.clientWidth) {
            subMenuButtons.style.justifyContent = "flex-start";
            subMenuButtons.style.paddingLeft = "10px";
        }
        else {
            subMenuButtons.style.justifyContent = "center";
        }
    }

    // Character modal handler
    document.querySelectorAll(".character-card").forEach((card) => {
        card.addEventListener("click", () => {
            activateModal(card, "character");
        })
    })

    // Ice cream modal handler
    document.querySelectorAll(".icecream-card").forEach((card) => {
        card.addEventListener("click", () => {
            activateModal(card, "icecream");
        })
    })

    function activateModal(card, option) {
        const characterModal = document.querySelector("#myModal");
        const bootstrapModal = new bootstrap.Modal("#myModal");

        const imgSrc = card.querySelector("img").getAttribute("src");
        const modalTitle = card.querySelector(".card-title");
        const modalDescription = card.querySelector(".card-description");

        characterModal.querySelector(".modal-img").setAttribute("src", imgSrc);
        characterModal.querySelector(".modal-title").innerHTML = modalTitle.innerHTML;
        characterModal.querySelector(".modal-description").innerHTML = modalDescription.innerHTML;
        
        if (option === "character") {
            const modalFooter = card.querySelector(".card-footer-p");
            characterModal.querySelector(".modal-footer-p").innerHTML = "Flavors: " + modalFooter.innerHTML;
        }

        bootstrapModal.show();
    }
});