document.addEventListener("DOMContentLoaded", function () {
  // Function to generate a random password
  function generatePassword() {
    // Get the password length
    let passwordLength = parseInt(document.getElementById('password-length').value);

    // Validate the password length
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      return;
    }

    // Check for character types
    let includeLowercase = document.getElementById("include-lowercase").checked;
    let includeUppercase = document.getElementById("include-uppercase").checked;
    let includeNumeric = document.getElementById("include-numeric").checked;
    let includeSpecial = document.getElementById("include-special").checked;

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
    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numericChars = "0123456789";
    let specialChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

    let characters = "";
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
    let password = "";

    for (let i = 0; i < passwordLength; i++) {

      let randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;

    

  }
  // Function that displays the generated password
  function displayPassword() {
    let password = generatePassword();
    let passwordField = document.getElementById("password");
    passwordField.textContent = password;
  }

  // Call the displayPassword function when the button is clicked
  document.getElementById("generate").addEventListener("click", displayPassword);
});