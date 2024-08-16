function validatePassword() {
    var password = document.getElementById("password");
    var message = document.getElementById("message");
    
    // Define the criteria
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var specialChars = /[\W_]/g; // Special characters
  
    
    // Validate lowercase letters
    if (!password.value.match(lowerCaseLetters)) {
      message.textContent = 'Password must contain lowercase letters';
      return;
    }
    
    // Validate uppercase letters
    if (!password.value.match(upperCaseLetters)) {
        message.textContent = 'Password must contain uppercase letters';
        return;
    }
    
    // Validate numbers
    if (!password.value.match(numbers)) {
        message.textContent = 'Password must contain at least one number';
        return;
    }
    
    // Validate special characters
    if (!password.value.match(specialChars)) {
        message.textContent = 'Password must contain special characters';
        return;
    }
    // Validate length
    if (password.value.length < 8) {
      message.textContent = 'Password must be at least 8 characters long';
      return;
    }
    
    // If all criteria are met
    message.textContent = 'Password is valid';
  }
  