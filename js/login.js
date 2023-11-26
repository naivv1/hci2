document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Call the validateCredentials function
            validateCredentials();
        });
    }
});

function validateCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Check if the entered credentials are correct
    if (username === "admin" && password === "admin") {
        // Redirect to a success page or perform other actions
        window.location.href = "index.html";
    } else {
        // Display an error message
        errorMessage.innerText = "Incorrect username or password. Please try again.";

        // Make sure the error container is visible
        errorMessage.style.display = "block";
        errorMessage.style.visibility = "visible";

    }

}
