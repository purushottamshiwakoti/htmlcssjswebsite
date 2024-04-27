function handleLogin() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailError = document.getElementById("email_error");
  var passwordError = document.getElementById("password_error");
  // Regular expression for email validation
  emailError.innerText = "";
  passwordError.innerText = "";

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailError.innerText = "Please enter a valid email address.";
    return;
  }

  if (password.length < 8) {
    passwordError.innerText = "Password must be at least 8 characters long.";
    return;
  }

  window.location.href = "dashboard.html";
}
