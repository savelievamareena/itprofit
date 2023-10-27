function showError(input) {
    input.style.outline = "1px solid hotpink";
    input.parentElement.nextElementSibling.style.visibility = "visible";
}

function hideError(input) {
    input.style.outline = "none";
    input.parentElement.nextElementSibling.style.visibility = "hidden";
}

export {showError, hideError};