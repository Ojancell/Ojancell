
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Format email tidak valid!');
        return;
    }
    
    if (password.length < 6) {
        alert('Password minimal 6 karakter!');
        return;
    }

    // Show loading
    loginButton.disabled = true;
    loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    
    // Simulate login process
    setTimeout(() => {
        alert('Login berhasil!');
        loginButton.disabled = false;
        loginButton.innerHTML = 'Masuk';
    }, 2000);
});
