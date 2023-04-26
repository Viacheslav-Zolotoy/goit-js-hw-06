const formEl = document.querySelector('.login-form');
const checkForm = (event => {
    event.preventDefault();
    const {
        email,
        password
    } = event.currentTarget;
    const inputElements = {
        email: email.value,
        password: password.value,
    };
    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!");
    };
    console.log(inputElements);
    event.currentTarget.reset();

});

formEl.addEventListener('submit', checkForm);
