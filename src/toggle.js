const toggleBtn = document.getElementById("toggle");
const body = document.querySelector("body");
const containerForm1 = document.querySelector(".container_form1");
const containerForm2 = document.querySelector(".container_form2");
const containerWelcome = document.querySelector(".container_welcome");
const inputs = document.getElementsByClassName("container_input");
const appName = document.getElementById("app_name");

toggleBtn.onclick = function toggleColor() {
  toggleBtn.classList.toggle("active");
  body.classList.toggle("active");
  container.classList.toggle("active");
  containerForm1.classList.toggle("active");
  containerForm2.classList.toggle("active");
  containerWelcome.classList.toggle("active");
  appName.classList.toggle("active");
  for (const div of inputs) {
    div.classList.toggle("active");
  }
};
