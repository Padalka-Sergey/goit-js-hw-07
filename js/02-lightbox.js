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
});

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      
        <li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>
        `;
    })
    .join("");
}
