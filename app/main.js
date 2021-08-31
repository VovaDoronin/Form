const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#userPassword');
const email = document.querySelector('#userEmail');
const loginBtn = document.querySelector('.form__button');

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});

const userName = 'Ivanov456@gmail.com';
const userPassword = '123456';

function emailIsValid(email) {
    return /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(email);
};

const login = (login, password) => {
    password === userPassword && login === userName
        ? (localStorage.setItem('auth-token', 'eyJhbGciOiJIUzI1NiIsInR'), alert('User is authorized'))
        : alert('Your email or password is not correct! Try again');
};

loginBtn.onclick = () => {
    if (!emailIsValid(email.value)) return alert('Email is incorrect!');
    login(email.value, password.value);
};