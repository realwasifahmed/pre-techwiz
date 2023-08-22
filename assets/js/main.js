// Login Page JAVASCRIPT START
function login() {
  var username = document.getElementById("lg-email").value;
  var password = document.getElementById("lg-password").value;
  if (username == "DisplayFlex" && password == "admin") {
    window.open('Dashboard.html?showNotification=true', "_self");
  }
  else {
    alert("Incorrect username or password.");
  }
}
function Crt_Acc() {
  window.open('Signup.html', "_self");
}
// Login Page JAVASCRIPT END
// Signup Page JAVASCRIPT START
function signup() {
  // var sp_entries = document.getElementsByClassName("sp_input").value;
  var sp_fname = document.getElementById("sp_f_name").value;
  var sp_lname = document.getElementById("sp_l_name").value;
  var sp_contact = document.getElementById("sp_contact").value;
  var sp_email = document.getElementById("sp_email").value;
  var sp_pass = document.getElementById("sp_password").value;
  var sp_conf_pass = document.getElementById("sp_conf_password").value;
  if (sp_fname == "" || sp_lname == "" || sp_contact == "" || sp_email == "" || sp_pass == "" || sp_conf_pass == "") {
    alert("Field is required");
  } else {
    if (sp_pass.length < 8) {
      alert("Password Must Be 8 Characters Long!");
    } else {
      if (sp_pass == sp_conf_pass) {
        window.open('Login.html');
      }
      else {
        alert("Password Must Be Same!")
      }
    }
  }
}

// Signup Page JAVASCRIPT End

// Forgot Password Javascript Start
function forgot() {
  var fg_pass = document.getElementById("fg_password").value;
  var fg_conf_pass = document.getElementById("fg_conf_password").value;

  if (fg_pass == "" || fg_conf_pass == "") {
    alert("Field is required");
  } else {
    if (fg_pass.length < 8) {
      alert("Password Must Be 8 Characters Long!");
    } else {
      if (fg_pass == fg_conf_pass) {
        window.open('Login.html', "_self");
      }
      else {
        alert("Password Must Be Same!")
      }
    }
  }
}
  // Forgot Password Javascript End