const form = document.getElementById('form');
const Nombre = document.getElementById('Nombre');
const email = document.getElementById('email');
const interes = document.getElementById('interes');

let isFormValid = false; // Variable booleana para verificar si todos los campos son válidos

//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    isFormValid = false;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = '';
    const message = document.getElementById('message');
    message.className = '';
    isFormValid = true;
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email no válido. Verifique por favor');
    }
}
// Check requited fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} es obligatorio`);
        } else {
            showSuccess(input);
        }
    });
}


// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} debe contener al menos ${min} letras`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} debe ser menor a ${max} letras`);
    } else {
        showSuccess(input);
    }
}


// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([Nombre, email, interes]);
    checkLength(Nombre, 2, 20);
    checkLength(interes, 30, 250);
    checkEmail(email);

    if (isFormValid) {
        alert('¡Formulario enviado con éxito!');
        form.reset(); // Reiniciar formulario
    }
});

