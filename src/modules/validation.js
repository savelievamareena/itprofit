function validateName(name) {
    return name.trim().length > 0;
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
    return regex.test(phone);
}

function validateMessage(message) {
    return message.trim().length > 0;
}

function validateForm(form) {
    return validateName(form.name) && validateName(form.email) && validateName(form.phone) && validateName(form.message);
}

export {validateName, validateEmail, validatePhone, validateMessage, validateForm};