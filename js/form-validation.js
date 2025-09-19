document.addEventListener('DOMContentLoaded', () => {
    // Select form and input elements
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Select error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // Helper function to validate email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Form submission event handler
    if (form) {
        form.addEventListener('submit', (event) => {
            // Prevent the default form submission
            event.preventDefault();

            let isValid = true;

            // Name validation
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }

            // Email validation
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required.';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }

            // Message validation
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required.';
                messageError.style.display = 'block';
                isValid = false;
            } else {
                messageError.style.display = 'none';
            }

            // If all fields are valid, you can process the form
            if (isValid) {
                const successMessage = document.getElementById('success-message');
                successMessage.textContent = 'Message sent successfully!';
                successMessage.style.display = 'block';

                // Optional: Clear the form fields after successful submission
                form.reset();
            }
        });
    }
});