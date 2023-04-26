let counterValue = 0;

const buttonUp = document.querySelector('button[data-action="increment"');
const buttonDown = document.querySelector('button[data-action="decrement"');
const counter = document.querySelector('#value');

const onButtonDown = (event) => {
    counterValue -= 1;
    counter.textContent = counterValue;
};
const onButtonUp = (event) => {
    counterValue += 1;
    counter.textContent = counterValue;
};

buttonUp.addEventListener('click', onButtonUp);
buttonDown.addEventListener('click', onButtonDown);

