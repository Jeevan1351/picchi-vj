function verify() {
  var name, mail, pass, repass, usn, phno, insname, teacher, sec;

  document.getElementById("usn").innerHTML = "";
  document.getElementById("sec").innerHTML = "";
  document.getElementById("instructor").innerHTML = "";
  document.getElementById("name").innerHTML = "";
  document.getElementById("email").innerHTML = "";
  document.getElementById("teacher").innerHTML = "";
  document.getElementById("repwd").innerHTML = "";
  document.getElementById("pwd").innerHTML = "";

  name = document.getElementById("Name").value.trim();
  mail = document.getElementById("Email").value.trim();
  pass = document.getElementById("password").value.trim();
  repass = document.getElementById("repassword").value.trim();
  usn = document.getElementById("USN").value.trim().toUpperCase();
  /*phno = (document.getElementById("phno").value).trim();*/
  insname = document.getElementById("Instructor").value.trim();
  teacher = document.getElementById("Teacher").value.trim();
  sec = document.getElementById("Section").value.trim().toUpperCase();

  ValidateEmail(mail);
  VerifyName(name);
  VerifyPass(pass, repass);
  VerifyUSN(usn);
  VerifyIName(insname);
  VerifyTName(teacher);
  VerifySec(sec);
}

function VerifySec(sec) {
  if (sec == "") {
    document.getElementById("sec").innerHTML = "Section Required";
  } else if (
    sec.charCodeAt(0) < 65 ||
    sec.charCodeAt(0) > 90 ||
    sec.charCodeAt(2) < 65 ||
    sec.charCodeAt(2) > 90
  )
    document.getElementById("sec").innerHTML = "Invalid";
}

function VerifyTName(name) {
  var i,
    len = name.length;
  if (name == "") {
    document.getElementById("teacher").innerHTML = "Name Required";
    return;
  }
  for (i = 0; i < len; i++) {
    var ref = name.charCodeAt(i);
    if (ref == 32 || (ref >= 65 && ref <= 90) || (ref >= 90 && ref <= 122)) {
      continue;
    } else {
      document.getElementById("teacher").innerHTML = "Invalid";
      return;
    }
  }
}

function VerifyIName(name) {
  var i,
    len = name.length;
  if (name == "") {
    document.getElementById("instructor").innerHTML = "Name Required";
    return;
  }
  for (i = 0; i < len; i++) {
    var ref = name.charCodeAt(i);
    if (ref == 32 || (ref >= 65 && ref <= 90) || (ref >= 90 && ref <= 122)) {
      continue;
    } else {
      document.getElementById("instructor").innerHTML = "Invalid";
      return;
    }
  }
}

function VerifyName(name) {
  var i,
    len = name.length;
  if (name == "") {
    document.getElementById("name").innerHTML = "Name Required";
    return;
  }
  for (i = 0; i < len; i++) {
    var ref = name.charCodeAt(i);
    if (ref == 32 || (ref >= 65 && ref <= 90) || (ref >= 90 && ref <= 122)) {
      continue;
    } else {
      document.getElementById("name").innerHTML = "Invalid";
      return;
    }
  }
}

function VerifyPass(p, re) {
  if (p == "" && re == "") {
    document.getElementById("repwd").innerHTML = "Mandatory";
    document.getElementById("pwd").innerHTML = "Mandatory";
  } else if (p != re)
    document.getElementById("repwd").innerHTML = "Do not match!";
}

function VerifyUSN(usn) {
  var i;
  if (
    usn.slice(0, 3) == "1BM" &&
    usn.charCodeAt(5) <= 90 &&
    usn.charCodeAt(5) >= 65 &&
    usn.charCodeAt(6) <= 90 &&
    usn.charCodeAt(6) >= 65 &&
    usn.charCodeAt(7) >= 48 &&
    usn.charCodeAt(7) <= 57 &&
    usn.charCodeAt(8) >= 48 &&
    usn.charCodeAt(8) <= 57 &&
    usn.charCodeAt(9) >= 48 &&
    usn.charCodeAt(9) <= 57
  ) {
  } else {
    document.getElementById("usn").innerHTML = "Invalid USN";
  }
}

function ValidateEmail(mail) {
  var len = mail.length,
    mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail == "") {
    document.getElementById("email").innerHTML = "Email Required";
  } else if (
    mail.match(mailformat) &&
    mail.slice(len - 12, len) == "@bmsce.ac.in"
  ) {
  } else {
    document.getElementById("email").innerHTML = "Invalid Email";
  }
}
