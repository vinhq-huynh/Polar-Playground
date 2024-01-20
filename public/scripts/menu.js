document.addEventListener("DOMContentLoaded", () => {    

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

    // Menu button handler
    document.querySelectorAll(".sub-menu-buttons > a").forEach((button) => {
        button.addEventListener("click", () => {
            showTab(button.getAttribute("class"));
        })
    })

    function showTab(buttonName) {
        
        document.querySelector(".character-container").classList.add("d-none");
        document.querySelector(".tub-container").classList.remove("d-none");
    }

});