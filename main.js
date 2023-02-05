
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
//Grafico
var Skills =  {"skill1": [
    {"nombre": "Python"},
    {"porcentaje": 50},
    {"color": "blue"},
    ],
    "skill2": [
        {"nombre": "Java"},
        {"porcentaje": 80},
        {"color": "orange"},
        ],
    "skill3": [
        {"nombre": "Html,Css,JavaScript"},
        {"porcentaje": 60},
        {"color": "red"},
        ],
    "skill4": [
        {"nombre": "Assembler"},
        {"porcentaje": 30},
        {"color": "green"},
        ],
    "skill5": [
        {"nombre": "Excel"},
        {"porcentaje": 50},
        {"color": "blue"},
        ],
    "skill6": [
        {"nombre": "Manejo de Bases de Datos"},
        {"porcentaje": 70},
        {"color": "orange"},
        ],
        "skill7": [
            {"nombre": "Diseño web"},
            {"porcentaje": 60},
            {"color": "red"},
            ],
            "skill8": [
                {"nombre": "Manejo de Redes sociales"},
                {"porcentaje": 90},
                {"color": "green"},
                ],
                "skill9": [
                    {"nombre": "Diseño Grafico"},
                    {"porcentaje": 40},
                    {"color": "blue"},
                    ]}


const grafico = document.querySelector('#grafico');

for (let i = 1; i < Object.keys(Skills).length+1; i++) { 
const barra = document.createElement("div");
barra.id = (`"barra${i}"`);
barra.className = "barra";
grafico.appendChild(barra);
barra.style.background = eval(`Skills.skill${i}`)[2].color;
barra.style.width = eval(`Skills.skill${i}`)[1].porcentaje+"%";
const contenido = document.createElement('p');
contenido.innerHTML = eval(`Skills.skill${i}`)[0].nombre;
barra.appendChild(contenido);
const porcentaje = document.createElement("p");
porcentaje.id = (`"porcentaje${i}"`);
porcentaje.className = "porcentaje";
porcentaje.innerHTML=eval(`Skills.skill${i}`)[1].porcentaje;
barra.appendChild(porcentaje);
const simbolo = document.createElement("p");
simbolo.innerHTML = "%";
barra.appendChild(simbolo);
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

  