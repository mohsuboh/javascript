document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const passwordInput = document.getElementById('password');
    const passconfirmInput = document.getElementById('passconfirm');

    // Assuming you have separate elements for each warning message
    const passwordWarning = document.getElementById('password-warning');
    const passconfirmWarning = document.getElementById('passconfirm-warning');
    const passwordsMatchWarning = document.getElementById('passwords-match-warning');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Reset all warnings and borders
        passwordInput.style.borderColor = '';
        passconfirmInput.style.borderColor = '';
        passwordWarning.style.display = 'none';
        passconfirmWarning.style.display = 'none';
        passwordsMatchWarning.style.display = 'none';

        // Step 1: Check for emptiness
        if (passwordInput.value.trim() === '') {
            passwordInput.style.borderColor = 'red';
            passwordWarning.style.display = 'block';
            isValid = false;
        }

        if (passconfirmInput.value.trim() === '') {
            passconfirmInput.style.borderColor = 'red';
            passconfirmWarning.style.display = 'block';
            isValid = false;
        }

        // Step 2: Check for equality ONLY if both are not empty
        // The check (isValid) here ensures we don't proceed if an empty field was found
        if (isValid && passwordInput.value !== passconfirmInput.value) {
            passwordInput.style.borderColor = 'red';
            passconfirmInput.style.borderColor = 'red';
            passwordsMatchWarning.style.display = 'block';
            isValid = false;
        }

        // Final submission check
        if (isValid) {
            console.log('Passwords are valid and match. Form can be submitted.');
            // Add your form submission logic here (e.g., send data to a server)
        }
    });
});