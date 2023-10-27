class Form {
    constructor(name, email, phone_number, message) {
        this.name = name;
        this.email = email;
        this.phone = phone_number;
        this.message = message;
    }
}

function submitForm(formObj) {
    console.log(formObj);
}

export {Form, submitForm};

