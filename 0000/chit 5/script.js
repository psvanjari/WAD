document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Push new user
    users.push(user);

    // Save back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST request
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "server.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Registration successful!");
            window.location.href = "display.html";
        }
    };

    xhr.send(JSON.stringify(user));
});