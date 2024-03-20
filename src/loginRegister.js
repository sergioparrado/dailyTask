const container = document.querySelector(".container");
const login_btn = document.getElementById("login_btn");
const register_btn = document.getElementById("register_btn");

login_btn.addEventListener("click", () => {
  container.classList.remove("toggle");
});

register_btn.addEventListener("click", () => {
  container.classList.add("toggle");
});
