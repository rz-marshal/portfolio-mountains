// import axios from 'axios';

const form = document.querySelector('#authform');
const loginBtn = document.querySelector('#loginBtn');


loginBtn.addEventListener('click', function (e) {
    e.preventDefault();


    if (validateForm(form)) {
        const data = {
            name: form.elements.user.value,
            password: form.elements.password.value,
            // human: form.elements.human.value
        };
        // window.location.href = "/admin" 

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/login');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            console.log(xhr.response);
        });

    } else {
        console.log('smth wrong!')
    }

    function validateForm(form) {
        let valid = true;

        if (!validateField(form.elements.user)) {
            valid = false;
        }
        if (!validateField(form.elements.password)) {
            valid = false;
        }
        if (!validateField(form.elements.human)) {
            valid = false;
        }

        return valid;
    }

    function validateField(field) {

        // field.nextElementSibling.textContent = '';
        // field.nextElementSibling.classList.remove('errorMessage');
        // field.classList.remove('form__input-field--error');
        // field.previousElementSibling.firstElementChild.classList.remove('form__input-icon--error');

        if (!field.checkValidity()) {
            // field.nextElementSibling.textContent = field.validationMessage;
            // field.nextElementSibling.classList.remove('error');
            // field.nextElementSibling.classList.add('errorMessage');
            // field.classList.add('form__input-field--error');
            // field.previousElementSibling.firstElementChild.classList.add('form__input-icon--error');
            // setTimeout(() => {
            //     field.nextElementSibling.textContent = '';
            //     field.nextElementSibling.classList.remove('errorMessage');
            // }, 2000)
            return false;
        } else {
            // field.nextElementSibling.textContent = '';
            return true;
        }
    }
})