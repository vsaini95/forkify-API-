const modal = document.querySelector(".modal");
const recpiesCard = document.querySelectorAll(".recpiesCard");

recpiesCard.forEach((card) => {
  card.addEventListener("click", function () {
    modal.classList.add("show-modal");
  });
});
