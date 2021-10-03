const form = document.getElementById('subform');
const input = document.getElementById('subform-input');
const error = document.querySelector('.error');
let isValid = false;
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function onSubmit(event) {
    event.preventDefault();
    isValid = emailRegex.test(input.value);
    if(!isValid) {
        error.hidden = false;
    } else {
        error.hidden = true; 
        console.log(input.value);
        input.value = '';
    }
}

form.addEventListener('submit', onSubmit);