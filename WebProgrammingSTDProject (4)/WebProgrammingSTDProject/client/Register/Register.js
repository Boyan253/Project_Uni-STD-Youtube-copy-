document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    clearErrors();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    if (username.length < 3) {
        showError('usernameError', 'Username must be at least 3 characters');
        isValid = false;
    }

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
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                showSuccess('Registration successful! Redirecting...');
                localStorage.setItem('username', username);
                setTimeout(() => {
                    window.location.href = '../Home/Home.html';
                }, 1500);
            } else {
                showError('usernameError', data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            showError('usernameError', 'Something went wrong. Please try again later.');
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
