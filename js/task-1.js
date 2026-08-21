const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
];

const gallery = document.querySelector('.gallery');

const galleryItem = document.createElement('li');

galleryItem.classList.add('gallery-item');

galleryItem.innerHTML = `
  <a class="gallery-link" href="${images[0].original}">
    <img
      class="gallery-image"
      src="${images[0].preview}"
      data-source="${images[0].original}"
      alt="${images[0].description}"
    />
  </a>
`;

gallery.append(galleryItem);
