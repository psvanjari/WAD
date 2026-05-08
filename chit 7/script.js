function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Username validation
    let userPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;

    // Password validation
    let passPattern = /^(?=.*[A-Z])(?=.*[@#$%^&*!]).{8,}$/;

    if (!userPattern.test(username)) {
        alert("Invalid Username!\nMust contain uppercase, lowercase, number, special character and min 8 characters.");
        return false;
    }

    if (!passPattern.test(password)) {
        alert("Invalid Password!\nMust contain uppercase, special character and min 8 characters.");
        return false;
    }

    alert("Login Successful!");
    return true;
}