const segundoBoton = document.querySelector("#btn__secondPage");

segundoBoton.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  const guardarName = localStorage.setItem("name", name);
  let anoNacimiento = parseInt(document.getElementById("age").value);
  let anoActual = 2022;
  let age = anoActual - anoNacimiento;
  localStorage.setItem("age", parseInt(age));
  if (age < 18) {
    alert("Lo siento, no puedes seguir! Te esperamos cuando cumplas 18 años");
  } else {
    window.location.replace("../pages/secondPage.html");
  }
});
