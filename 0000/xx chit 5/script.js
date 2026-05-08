function submitData() {

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    // AJAX POST simulation
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "fakeAPI", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 200 || xhr.status === 0) {

            // Get existing users
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // push new user
            users.push(user);

            // save to localStorage
            localStorage.setItem("users", JSON.stringify(users));

            alert("Data saved successfully!");

            // redirect to list page
            window.location.href = "list.html";
        }
    };

    // send data
    xhr.send(JSON.stringify(user));
}