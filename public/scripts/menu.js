document.addEventListener("DOMContentLoaded", () => {    
    const characterModal = document.querySelector("#characterModal");
    const bootstrapModal = new bootstrap.Modal("#characterModal");

    document.querySelectorAll(".character-card").forEach((card) => {
        card.addEventListener("click", () => {
            activateModal(card);
        })
    })

    function activateModal(card) {
        const characterName = card.querySelector(".card-title").innerHTML;
        const imgSrc = card.querySelector("img").getAttribute("src");
        const characterDescription = card.querySelector(".character-description");
        const characterFlavors = card.querySelector(".character-flavors");

        characterModal.querySelector(".modal-title").innerHTML = characterName;
        characterModal.querySelector(".modal-img").setAttribute("src", imgSrc);
        characterModal.querySelector(".modal-description").innerHTML = characterDescription.innerHTML;
        characterModal.querySelector(".modal-footer-p").innerHTML = "Flavors: " + characterFlavors.innerHTML;
        bootstrapModal.show();
    }
});