const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(image => `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.original}">
        <img
          class="gallery-image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
    </li>
  `)
  .join('');

gallery.innerHTML = galleryMarkup;
