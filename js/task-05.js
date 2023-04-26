const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
const onOutputChange = event => {
    outputEl.textContent = event.currentTarget.value;
};
inputEl.addEventListener('input', onOutputChange);
