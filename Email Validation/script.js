function validateemail() {
    var email = document.getElementById("email").value;

    var wor = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/

    var result = wor.test(email);

    if (result == true) {
        document.getElementById("p1").innerHTML = email + " is a valid email address.";
        p1.style.color = "#00ff00";
    } else {
        document.getElementById("p1").innerHTML = email + " is a not valid email address";
        p1.style.color = "#ff0000"
    }
}