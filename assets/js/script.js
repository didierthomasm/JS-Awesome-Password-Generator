document.addEventListener("DOMContentLoaded", function () {
  // Function to generate a random password
  function generatePassword() {
    // Get the password length
    var passwordLength = parseInt(document.getElementById('password-length').value);

    // Validate the password length
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      return;
    }

    // Check for character types
    var includeLowercase = document.getElementById("include-lowercase").checked;
    var includeUppercase = document.getElementById("include-uppercase").checked;
    var includeNumeric = document.getElementById("include-numeric").checked;
    var includeSpecial = document.getElementById("include-special").checked;

    // Validate that at least one character type is selected
    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumeric &&
      !includeSpecial
    ) {
      alert("Please select at least one character type.");
      return;
    }

    // Define character pools based on selected character types
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

    var characters = "";
    // Add selected character types to the pool
    if (includeLowercase) {
      characters += lowercaseChars;
    }

    if (includeUppercase) {
      characters += uppercaseChars;
    }

    if (includeNumeric) {
      characters += numericChars;
    }

    if (includeSpecial) {
      characters += specialChars;
    }

    // Generate the password
    var password = "";

    for (var i = 0; i < passwordLength; i++) {

      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;

    

  }
  // Function that displays the generated password
  function displayPassword() {
    var password = generatePassword();
    var passwordField = document.getElementById("password");
    passwordField.textContent = password;
  }

  // Call the displayPassword function when the button is clicked
  document.getElementById("generate").addEventListener("click", displayPassword);
});