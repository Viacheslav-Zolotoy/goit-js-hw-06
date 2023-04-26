function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEL = document.querySelector('#controls input[type="number"]');
const buttonCreateEL = document.querySelector('button[data-create]');
const buttonDestroyEL = document.querySelector('button[data-destroy]');
const divBox = document.querySelector('#boxes');
let amount;
let divs = [];
const createBoxes = (event => counter(amount));
const counter = (number) => {
  for (let i = 0; i < number; i++) {
    const divForBox = document.createElement('div');
    divs.push(divForBox);
    divForBox.classList.add('create-div')
    divForBox.style.backgroundColor = `${getRandomHexColor()}`;
    if (i === 0) {
      divForBox.style.width = '30px';
      divForBox.style.height = '30px';
    }
    else {
      divForBox.style.width = `${30 + (10 * i)}px`;
      divForBox.style.height = `${30 + (10 * i)}px`;
    }
    divBox.appendChild(divForBox);
  }
};
const valueInput = (event => {
  amount = inputEL.value;
  return amount;
});
const removeDiv = (event => {
  inputEL.value = '';
  divs.forEach(div => {
    divBox.removeChild(div);
  });
  divs = [];
});

inputEL.addEventListener('input', valueInput);
buttonCreateEL.addEventListener('click', createBoxes);
buttonDestroyEL.addEventListener('click', removeDiv);