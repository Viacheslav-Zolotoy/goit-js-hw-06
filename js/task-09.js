function getRandomHexColor(event) {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const ButtonCngClrEl = document.querySelector('.change-color');
const valueColorEl = document.querySelector('.color');
const onChengeColor = (event => {
  const bodyEl = document.querySelector('body');
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  valueColorEl.textContent = `${bodyEl.style.backgroundColor}`;
})

ButtonCngClrEl.addEventListener('click', onChengeColor);
