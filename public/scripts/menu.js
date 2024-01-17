document.addEventListener("DOMContentLoaded", () => {
    const characterModal = document.querySelector("#characterModal");
    const bootstrapModal = new bootstrap.Modal("#characterModal");

    document.querySelectorAll(".character-card").forEach((card) => {
        card.addEventListener("click", () => {
            activateModal(card);
        })
    })

    function activateModal(card) {
        var characterName = card.querySelector(".card-title").innerHTML;
        var imgSrc = card.querySelector("img").getAttribute("src");

        characterModal.querySelector(".modal-title").innerHTML = characterName;
        characterModal.querySelector(".modal-img").setAttribute("src", imgSrc);
        bootstrapModal.show();
    }
});