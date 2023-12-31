import '../styles/style.scss';
import Inputmask from "inputmask";
import {validateName, validateEmail, validatePhone, validateMessage, validateForm} from "./modules/validation";
import {showError, hideError} from "./modules/errors";
import {submitForm, Form, clearForm} from "./modules/form";

document.addEventListener('DOMContentLoaded', function() {
    let formEl = document.getElementById("formEl");

    const im = new Inputmask("+375(99)999-99-99"); // Маска для российского телефонного номера

    let nameField = document.getElementById("name");
    let emailField = document.getElementById("email");
    let phoneNumberField = document.getElementById("phone_number");
    im.mask(phoneNumberField);

    let messageField = document.getElementById("message");
    let modalWindow = document.getElementsByClassName("modal_wrapper")[0];
    let closeModal = document.getElementById("close_modal");

    nameField.addEventListener('input', function (e) {
        const name = this.value;
        if (validateName(name)) {
            hideError(this);
        }
    })

    emailField.addEventListener('input', function (e) {
        const email = this.value;
        if (validateEmail(email)) {
            hideError(this);
        }
    })

    phoneNumberField.addEventListener('input', function (e) {
        const phoneNumber = this.value;
        if (validatePhone(phoneNumber)) {
            hideError(this);
        }
    })

    messageField.addEventListener('input', function (e) {
        const message = this.value;
        if (validateMessage(message)) {
            hideError(this);
        }
    })

    closeModal.addEventListener("click", function(e) {
        modalWindow.classList.remove("active");
    })

    formEl.addEventListener("submit", function(e) {
        e.preventDefault();

        if (!validateName(nameField.value)) {
            showError(nameField);
        }

        if (!validateName(emailField.value)) {
            showError(emailField);
        }

        if (!validateName(phoneNumberField.value)) {
            showError(phoneNumberField);
        }

        if (!validateName(messageField.value)) {
            showError(messageField);
        }

        let formObj = new Form(nameField.value, emailField.value, phoneNumberField.value, messageField.value);
        if(!validateForm(formObj)) {
            modalWindow.classList.add("active");
        }else{
            submitForm(formObj);
            clearForm(nameField, emailField, phoneNumberField, messageField);
        }
    })
});
