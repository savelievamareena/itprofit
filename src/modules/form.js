import ajaxSubmit from './ajaxSubmit';

class Form {
    constructor(name, email, phone_number, message) {
        this.name = name;
        this.email = email;
        this.phone = phone_number;
        this.message = message;
    }
}

function submitForm(formObj) {
    ajaxSubmit(formObj, "http://localhost:9090/api/callback")
        .then(response => {
            if(response.status === "success") {
                document.getElementById("server_message").innerText = response.msg;
                document.getElementById("server_message").style.visibility = "visible";
                setTimeout(function() {
                    document.getElementById("server_message").style.visibility = "hidden";
                }, 2000)
            }else if(response.status === "error"){
                console.log(response.fields);
                document.getElementById("server_message").innerText = "Something went wrong. Please, try again later.";
                document.getElementById("server_message").style.visibility = "visible";
                setTimeout(function() {
                    document.getElementById("server_message").style.visibility = "hidden";
                }, 2000)
            }
    }).catch(error => {
        console.error('Error:', error.message);
    });
}

function clearForm(...args) {
    args.forEach(field => {
        field.value = "";
    })
}

export {Form, submitForm, clearForm};

