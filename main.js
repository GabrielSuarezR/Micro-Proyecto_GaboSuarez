
// js del Hero
var currentIndex = 1;
displaySlides(currentIndex);

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}
function setSlides(num) {
    displaySlides(currentIndex += num);
}

//validaciones

const usernameEl = document.querySelector('#nombre');
const emailEl = document.querySelector('#correo');
const mensajeEl = document.querySelector('#mensaje');
const form = document.querySelector('#signup');

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};
const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


const checkUsername = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'El Nombre no puede estar vacio.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `El nombre debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}
const checkmensaje = () => {

    let valid = false;
    const mensaje = mensajeEl.value.trim();

    if (!isRequired(mensaje)) {
        showError(mensajeEl, 'El mensaje no puede estar vacio.');
    } else {
        showSuccess(mensajeEl);
        valid = true;
    }
    return valid;
}

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isMensajeValid= checkmensaje();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isMensajeValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        alert("Solicitud enviada")
    }
});

  