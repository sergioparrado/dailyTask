function login() {
  let password = document.getElementById("password").value;
  let user = document.getElementById("user").value;
  if (user == "" && password == "") {
    alert("Por Favor, ingrese los datos solicitados");
  } else {
    alert("Bienvenido!");
  }
}
