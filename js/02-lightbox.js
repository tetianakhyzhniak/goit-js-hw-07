import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);
const galleryCreate = document.querySelector('.gallery');
console.log(galleryCreate)
const galleryMarkUp = galleryItems.map(({ preview, original, description}) =>
`<li class="gallery__item">
   <a class="gallery__link" href="${preview}">
      <img class="gallery__image" src="${original}" alt="${description}" />
   </a>
</li>`);
galleryCreate.insertAdjacentHTML('beforeend', galleryMarkUp.join(''));
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});
