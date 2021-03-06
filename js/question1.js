// Question 1
// Write code that checks that the firstName input's value is at
// least 2 characters long when the form is submitted.
// Show/hide the error message every time the validation runs.

const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if (checkNameLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
}

function checkNameLength(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 1) {
        return true;
    } else {
        return false;
    }
}
