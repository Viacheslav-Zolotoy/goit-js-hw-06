const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listGallery = document.querySelector('.gallery');

const addGallery = images.map(({ url, alt }) => {
  const addItemEl = document.createElement('li');
  addItemEl.classList.add('item-gallery')
  const addImgEl = document.createElement('img');
  addImgEl.src = url;
  addImgEl.alt = alt;
  addItemEl.appendChild(addImgEl);
  return listGallery.append(addItemEl);
})
console.log('listGallery: ', listGallery);
