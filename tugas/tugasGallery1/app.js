const galleryView = document.querySelectorAll(".gallery-view")[0];
const galleryPreview = document.querySelectorAll(".gallery-preview")[0];
const listGalleryPreview = document.querySelector(".list-gallery-preview");
const close = document.querySelector("#close");

galleryView.addEventListener("click", () => {
  galleryPreview.style.display = "block";
});

close.addEventListener("click", () => {
  galleryPreview.style.display = "none";
});
