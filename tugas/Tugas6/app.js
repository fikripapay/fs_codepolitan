const listMentor = document.querySelector(".list-mentor");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", () => {
  listMentor.scrollLeft += 100;
});

prevBtn.addEventListener("click", () => {
  listMentor.scrollLeft -= 100;
});
