function validateForm() {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    // First Name validation
    let namePattern = /^[A-Za-z]{6,}$/;
    if (!namePattern.test(fname)) {
        alert("First Name must contain only alphabets and at least 6 characters");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Enter valid Email (name@domain.com)");
        return false;
    }

    // Mobile validation
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must be exactly 10 digits");
        return false;
    }

    // Last Name & Address validation
    if (lname === "" || address === "") {
        alert("Last Name and Address cannot be empty");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}