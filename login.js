function valid() {
  var button = document.querySelector(".button");
  button.addEventListener("click", () => {
    var len, mail, pass;
    pass = document.getElementById("password").value;
    mail = document.getElementById("e-mail").value;
    len = mail.length;
    if (mail == "") {
      document.getElementById("email").innerHTML = "Email Required";
    } else if (mail.slice(len - 12, len) != "@bmsce.ac.in") {
      document.getElementById("email").innerHTML = "Invalid Email";
    }

    if (pass == "") {
      document.getElementById("pwd").innerHTML = "Password Required";
    }
  });
}

valid();
