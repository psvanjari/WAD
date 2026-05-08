document.getElementById("regForm").addEventListener("submit", function(e) {

    // Stop page refresh
    e.preventDefault();

    // Get form values
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    // Get old users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user
    users.push(user);

    // Save again in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST Request
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {

        if (xhr.status == 201 || xhr.status == 200) {

            alert("Registration Successful");

            // Redirect to next page
            window.location.href = "display.html";
        }
    };

    // Send data
    xhr.send(JSON.stringify(user));

});