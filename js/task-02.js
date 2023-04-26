const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');

const abbElement = ingredients.forEach(element => {
  const createElItem = document.createElement('li');
  createElItem.classList.add('item');
  const createElP = document.createElement('p');
  createElP.textContent = element;
  createElItem.appendChild(createElP);
  return listEl.append(createElItem);
});
console.log(listEl);