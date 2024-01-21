document.addEventListener("DOMContentLoaded", () => {    
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
    const characterModal = document.querySelector("#characterModal");
    const bootstrapModal = new bootstrap.Modal("#characterModal");

    document.querySelectorAll(".character-card").forEach((card) => {
        card.addEventListener("click", () => {
            activateModal(card);
        })
    })

    function activateModal(card) {
        const imgSrc = card.querySelector("img").getAttribute("src");
        const characterName = card.querySelector(".card-title");
        const characterDescription = card.querySelector(".card-description");
        const characterFlavors = card.querySelector(".card-footer-p");

        characterModal.querySelector(".modal-img").setAttribute("src", imgSrc);
        characterModal.querySelector(".modal-title").innerHTML = characterName.innerHTML;
        characterModal.querySelector(".modal-description").innerHTML = characterDescription.innerHTML;
        characterModal.querySelector(".modal-footer-p").innerHTML = "Flavors: " + characterFlavors.innerHTML;
        bootstrapModal.show();
    }
});