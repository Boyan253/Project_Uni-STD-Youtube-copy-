document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    clearErrors();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        isValid = false;
    }

    if (isValid) {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            let data;
            try {
                data = await response.json();
            } catch (error) {
                throw new Error('Server did not return JSON');
            }

            if (response.ok) {
                localStorage.setItem('username', data.user.username); // Store username in localStorage
                showSuccess('Login successful! Redirecting...');
                setTimeout(() => {
                    window.location.href = '../Home/Home.html'; // Redirect to home page
                }, 1500);
            } else {
                showError('emailError', data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            showError('emailError', 'Something went wrong. Please try again later.');
        }
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });
    document.getElementById('successMessage').style.display = 'none';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showSuccess(message) {
    const successElement = document.getElementById('successMessage');
    successElement.innerText = message;
    successElement.style.display = 'block';
}
