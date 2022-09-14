function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "admin" && password == "sakr") {
    document.location.href = "./htmls/selection.html";
  } else if (
    (username == "adnan" ||
      username == "sakr" ||
      username == "mena" ||
      username == "mayar" ||
      username == "tony") &&
    password == "sakr"
  ) {
    document.location.href = "./htmls/takhtet.html";
  } else if (
    (username == "taimor" ||
      username == "sakr" ||
      username == "mena" ||
      username == "mayar" ||
      username == "tony") &&
    password == "sakr"
  ) {
    document.location.href = "./htmls/tadreb.html";
  } else {
    alert("Username or Password is incorrect !");
  }
}
