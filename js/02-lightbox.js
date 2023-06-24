import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const list = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');

list.insertAdjacentHTML('beforeend', markup);
// console.log(SimpleLightbox);

list.addEventListener('click', handlerClick);

function handlerClick(evt) {
    if (evt.target.tagName === 'IMG') {
        evt.preventDefault();
        const gallery = new SimpleLightbox('.gallery a', { captionsData: `alt`, captionDelay: 250, });
        gallery.open();
        }
        
}
