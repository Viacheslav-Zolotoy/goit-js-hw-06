const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
const fontSizeControl = event => {
    spanText.style.fontSize = `${event.currentTarget.value}.px`;
};
inputEl.addEventListener('input', fontSizeControl);