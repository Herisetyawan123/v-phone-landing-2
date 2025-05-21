
document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const registerForm = document.getElementById('registerForm');
    const formMessage = document.getElementById('formMessage');
    
    // Password strength checker
    const passwordInput = document.getElementById('password');
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');
    
    // Error message elements
    const fullNameError = document.getElementById('fullNameError');
    const genderError = document.getElementById('genderError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const countryError = document.getElementById('countryError');
    const termsError = document.getElementById('termsError');
    
    // Password strength checker
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;
            
            // Length check
            if (password.length >= 8) {
                strength += 1;
            }
            
            // Contains numbers
            if (/\d/.test(password)) {
                strength += 1;
            }
            
            // Contains special characters
            if (/[^A-Za-z0-9]/.test(password)) {
                strength += 1;
            }
            
            // Update strength indicator
            strengthBar.className = 'strength-bar';
            if (strength === 1) {
                strengthBar.classList.add('weak');
                strengthText.textContent = 'Weak Password';
            } else if (strength === 2) {
                strengthBar.classList.add('medium');
                strengthText.textContent = 'Medium Password';
            } else if (strength === 3) {
                strengthBar.classList.add('strong');
                strengthText.textContent = 'Strong Password';
            } else {
                strengthText.textContent = 'Password Strength';
            }
        });
    }
    
    // Form submission
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            fullNameError.textContent = '';
            genderError.textContent = '';
            emailError.textContent = '';
            passwordError.textContent = '';
            confirmPasswordError.textContent = '';
            countryError.textContent = '';
            termsError.textContent = '';
            formMessage.className = 'form-message';
            formMessage.textContent = '';
            
            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const genderRadios = document.getElementsByName('gender');
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const country = document.getElementById('country').value;
            const terms = document.getElementById('terms').checked;
            
            let isValid = true;
            
            // Validation 1: Full Name (at least 2 words, letters only)
            if (fullName === '') {
                fullNameError.textContent = 'Please enter your full name';
                isValid = false;
            } else if (!/^[A-Za-z]+ [A-Za-z ]+$/.test(fullName)) {
                fullNameError.textContent = 'Please enter your first and last name (letters only)';
                isValid = false;
            }
            
            // Validation 2: Gender selection
            let genderSelected = false;
            for (const radio of genderRadios) {
                if (radio.checked) {
                    genderSelected = true;
                    break;
                }
            }
            
            if (!genderSelected) {
                genderError.textContent = 'Please select your gender';
                isValid = false;
            }
            
            // Validation 3: Email format
            if (email === '') {
                emailError.textContent = 'Please enter your email address';
                isValid = false;
            } else if (!email.includes('@') || !email.includes('.')) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Validation 4: Password strength
            if (password === '') {
                passwordError.textContent = 'Please enter a password';
                isValid = false;
            } else if (password.length < 8) {
                passwordError.textContent = 'Password must be at least 8 characters long';
                isValid = false;
            } else if (!/\d/.test(password)) {
                passwordError.textContent = 'Password must contain at least one number';
                isValid = false;
            }
            
            // Validation 5: Password match
            if (confirmPassword === '') {
                confirmPasswordError.textContent = 'Please confirm your password';
                isValid = false;
            } else if (password !== confirmPassword) {
                confirmPasswordError.textContent = 'Passwords do not match';
                isValid = false;
            }
            
            // Country validation
            if (country === '') {
                countryError.textContent = 'Please select your country';
                isValid = false;
            }
            
            // Terms agreement
            if (!terms) {
                termsError.textContent = 'You must agree to the Terms & Conditions';
                isValid = false;
            }
            
            // If valid, show success message
            if (isValid) {
                formMessage.className = 'form-message success';
                formMessage.textContent = 'Registration successful! Welcome to V-Phone!';
                registerForm.reset();
                strengthBar.className = 'strength-bar';
                strengthText.textContent = 'Password Strength';
                
                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth' });
            } else {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Please fix the errors in the form';
                
                // Scroll to first error
                document.querySelector('.error-message:not(:empty)').scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
    
    // Real-time validation for email field
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            
            if (email !== '' && (!email.includes('@') || !email.includes('.'))) {
                emailError.textContent = 'Please enter a valid email address';
            } else {
                emailError.textContent = '';
            }
        });
    }
});
