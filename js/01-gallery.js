import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);
const galleryImage = document.querySelector('.gallery')
console.log(galleryImage);
const markUp = galleryItems.map(({ preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${original}"
      data-source="${preview}"
      alt="${description}"
    />
  </a>
</li>`);

galleryImage.insertAdjacentHTML('beforeend', markUp.join(''));
galleryImage.addEventListener("click", onClick) ;
    function onClick(e) {
          if(!e.target.classList.contains("gallery__image")){
            return;
          }
          e.preventDefault();
const galleryId = e.target.dataset.source;
const instance = basicLightbox.create(`<img src="${galleryId}" width="1280" height="auto"/>`);
instance.show();}