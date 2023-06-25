import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');

list.insertAdjacentHTML('beforeend', markup);

list.addEventListener('click', handlerClick);
let originalImg;
function handlerClick(evt) {
    evt.preventDefault();
    // originalImg = evt.target.closest('.gallery__link').href;
    originalImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600">`, {
    onShow: (instance) => {
      document.addEventListener('keydown', handlerEsc)
    },
    onClose: (instance) => {
      document.removeEventListener('keydown', handlerEsc)
    }
  } )
    
    instance.show();
    
   
  
    
    function handlerEsc(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        }
    }}