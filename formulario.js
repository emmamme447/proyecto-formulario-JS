//ACCESO A NODOS--SELECTORES CSS
const nameEl = document.querySelector('#name');//nombre
const surnamesEl = document.querySelector('#surnames');//apellidos
const addressEl = document.querySelector('#address');//dirección
const postalcodeEl = document.querySelector('#postalcode');//código postal
const cityEl = document.querySelector('#city');//ciudad
const birthdateEl = document.querySelector('#birthdate');//fecha de nacimiento
const phoneEl = document.querySelector('#phone');//teléfono
const emailEl = document.querySelector('#email');//email
const favouriteflowerEl = document.querySelector('#favouriteflower');//flor favorita


const form = document.querySelector('#signup');

//nombre name
const checkname = () => {

    let valid = false;

    const min = 3,
        max = 30;

    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'Este espacio no puede quedarse vacío.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameEl, `Este espacio debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};

//apellidos surnames
const checksurnames = () => {

    let valid = false;

    const min = 3,
        max = 50;

    const surnames = surnamesEl.value.trim();

    if (!isRequired(surnames)) {
        showError(surnamesEl, 'Este espacio no puede quedarse vacío.');
    } else if (!isBetween(surnames.length, min, max)) {
        showError(surnamesEl, `Este espacio debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(surnamesEl);
        valid = true;
    }
    return valid;
};

//dirección address
const checkaddress = () => {

    let valid = false;

    const min = 3,
        max = 60;

    const address = addressEl.value.trim();

    if (!isRequired(address)) {
        showError(addressEl, 'Este espacio no puede quedarse vacío.');
    } else if (!isBetween(address.length, min, max)) {
        showError(addressEl, `Este espacio debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(addressEl);
        valid = true;
    }
    return valid;
};

//código postal postalcode
const checkpostalcode = () => {

    let valid = false;

    const min = 5,
        max = 5;

    const postalcode = postalcodeEl.value.trim();

    if (!isRequired(postalcode)) {
        showError(postalcodeEl, 'Este espacio no puede quedarse vacío.');
    } else if (!isBetween(postalcode.length, min, max)) {
        showError(postalcodeEl, `Este espacio debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(postalcodeEl);
        valid = true;
    }
    return valid;
};

//ciudad city
const checkcity = () => {

    let valid = false;

    const min = 2,
        max = 30;

    const city = cityEl.value.trim();

    if (!isRequired(city)) {
        showError(cityEl, 'Este espacio no puede quedarse vacío.');
    } else if (!isBetween(city.length, min, max)) {
        showError(cityEl, `Este espacio debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(cityEl);
        valid = true;
    }
    return valid;
};

//fecha de nacimiento birthdate
const checkbirthdate = () => {

    let valid = false;

    const min = 10,
        max = 10;

    const birthdate = birthdateEl.value.trim();

    if (!isRequired(birthdate)) {
        showError(birthdateEl, 'Este espacio no puede quedarse vacío.');
    } else if (!isBetween(birthdate.length, min, max)) {
        showError(birthdateEl, `Este espacio debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(birthdateEl);
        valid = true;
    }
    return valid;
};

//teléfono phone
const checkphone = () => {

    let valid = false;

    const min = 9,
        max = 9;

    const phone = phoneEl.value.trim();

    if (!isRequired(phone)) {
        showError(phoneEl, 'Este espacio no puede quedarse vacío.');
    } else if (!isBetween(phone.length, min, max)) {
        showError(phoneEl, `Este espacio debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;
};

//correo electrónico email
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Este espacio no puede quedarse vacío.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'El email introducido no es válido.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

//flor favorita favouriteflower
const checkfavouriteflower = () => {

    let valid = false;

    const min = 2,
        max = 25;

    const favouriteflower = favouriteflowerEl.value.trim();

    if (!isRequired(favouriteflower)) {
        showError(favouriteflowerEl, 'Este espacio no puede quedarse vacío.');
    } else if (!isBetween(favouriteflower.length, min, max)) {
        showError(favouriteflowerEl, `Este espacio debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(favouriteflowerEl);
        valid = true;
    }
    return valid;
};



//nombre name
const isNameValid = (name) => {
    const re = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    return re.test(name);
};

//apellidos surnames
const isSurnamesValid = (surnames) => {
    const re = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    return re.test(surnames);
};

//dirección address
const isAddressValid = (address) => {
    const re = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    return re.test(address);
};

//código postal postalcode
const isPostalcodeValid = (postalcode) => {
    const re = /^0[1-9][0-9]{3}|[1-4][0-9]{4}|5[0-2][0-9]{3}$/;
    return re.test(postalcode);
};

//ciudad city
const isCityValid = (city) => {
    const re = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    return re.test(city);
};

//fecha de nacimiento birthdate
const isBirthdateValid = (birthdate) => {
    const re = /(?:0?[1-9]|[12][0-9]|3[01])([/ -\\])(?:0?[1-9]|1[012])\\1[12][0-9]{3}$/;
    return re.test(birthdate);
};

//teléfono phone
const isPhoneValid = (phone) => {
    const re = /(?:[+]?(?:[0-9]{1,5}|\\x28[0-9]{1,5}\\x29)[ ]?)?[0-9]{2}(?:[0-9][ ]?){6}[0-9]$/;
    return re.test(phone);
};

//EMAIL
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

//flor favorita favouriteflower
const isFavouriteflowerValid = (favouriteflower) => {
    const re = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    return re.test(favouriteflower);
};


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


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


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isNameValid = checkName(),
        isSurnamesValid = checkSurnames(),
        isAddressValid = checkAddress(),
        isPostalcodeValid = checkPostalcode(),
        isCityValid = checkCity(),
        isBirthdateValid = checkBirthdate(),
        isPhoneValid = checkPhone(),
        isEmailValid = checkEmail(),
        isFavouriteflowerValid = checkFavouriteflower();
        

    let isFormValid = isNameValid &&
        isSurnamesValid &&
        isAddressValid &&
        isPostalcodeValid &&
        isCityValid &&
        isBirthdateValid &&
        isPhoneValid &&
        isEmailValid &&
        isFavouriteflowerValid;

    // submit to the server if the form is valid
    if (isFormValid) {
    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'surnames':
            checkSurnames();
            break;
        case 'address':
            checkAddress();
            break;
        case 'postalcode':
            checkPostalcode();
            break;
        case 'city':
            checkCity();
            break;
        case 'birthdate':
            checkBirthdate();
            break;
        case 'phone':
            checkPhone();
            break;
        case 'email':
            checkEmail();
            break;
        case 'favouriteflower':
            checkFavouriteflower();
            break;
    }
}));







