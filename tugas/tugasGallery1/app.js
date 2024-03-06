const listGalleryView = document.querySelectorAll(".list-gallery-view");
const galleryPreview = document.querySelector(".gallery-preview");
const listGalleryPreview = document.querySelectorAll(".list-gallery-preview");
const closeBtn = document.querySelectorAll("#close");

function showGalleryPreview() {
  listGalleryView.forEach((view, index) => {
    view.addEventListener("click", () => {
      galleryPreview.style.display = "block";
      listGalleryPreview[index].style.display = "block";
    });
  });
}

function hideGalleryPreview() {
  galleryPreview.style.display = "none";
  listGalleryPreview.forEach((preview) => {
    preview.style.display = "none";
  });
}

closeBtn.forEach((button) => {
  button.addEventListener("click", hideGalleryPreview);
});

document.addEventListener("click", (e) => {
  if (e.target.className === "gallery-preview") {
    hideGalleryPreview();
  }
});

showGalleryPreview();
