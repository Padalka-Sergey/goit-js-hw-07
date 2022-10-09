import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const itemsContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItems(galleryItems);
itemsContainer.insertAdjacentHTML("beforeend", itemsMarkup);

itemsContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);

  instance.show();

  document.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      console.log(evt.code);
      instance.close();
    }
  });
});

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
