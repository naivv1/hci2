document.addEventListener("DOMContentLoaded", function () {
    var signUpForm = document.querySelector("#signupForm"); // Use the ID of the form

    if (signUpForm) {
        signUpForm.addEventListener("submit", validateSignUp);
    }
});

function validateSignUp(event) {
    event.preventDefault(); // Prevent the default form submission

    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var errorMessage = document.getElementById("error-message");

    // Check if any of the form fields is empty
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errorMessage.innerText = "All fields are required."; // Display an error message

        // Make sure the error container is visible
        document.querySelector('.error-container').style.display = 'block';
        errorMessage.style.display = "block";
    } else {
        // Check if the password contains at least one alphanumeric character and one symbol
        var alphanumericRegex = /^(?=.*[a-zA-Z0-9])/;
        var symbolRegex = /^(?=.*[\W_])/;

        if (!alphanumericRegex.test(password) || !symbolRegex.test(password)) {
            // Display an error message
            errorMessage.innerText = "Password must contain at least one alphanumeric character and one symbol.";

            // Make sure the error container is visible
            document.querySelector('.error-container').style.display = 'block';
            errorMessage.style.display = "block";
        } else if (password !== confirmPassword) {
            // Display an error message if passwords do not match
            errorMessage.innerText = "Passwords do not match. Please try again.";

            // Make sure the error container is visible
            document.querySelector('.error-container').style.display = 'block';
            errorMessage.style.display = "block";
        } else {
            // Here you can add additional validation logic as needed

            // Show a thank you window
            showThankYouWindow();
        }
    }
}

function showThankYouWindow() {
    // You can customize the thank you window here
    alert("Thank you for registering! You will now be redirected to the login page.");

    // Redirect to the login page or perform other actions
    window.location.href = "login.html";
}
