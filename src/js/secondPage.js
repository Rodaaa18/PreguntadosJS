let parrafo = document.querySelector("#maquina-escribir3");
let nombre = localStorage.getItem("name");
let edad = localStorage.getItem("age");
const maquina3 = document.getElementById("maquina-escribir3");

const maquinaEscribir3 = (text = "", tiempo = 200, etiqueta = "") => {
  let arrayCaracteres = text.split("");
  etiqueta.innerHTML = "";
  let i = 0;
  let j = text.length;
  let escribir = setInterval(function () {
    if (i === arrayCaracteres.length) {
      if (j === 0) {
        etiqueta.innerHTML = "";
        i = 0;
        j = text.length;
      }
    } else {
      etiqueta.innerHTML += arrayCaracteres[i];
      i++;
    }
  }, tiempo);
};

const texto =
  (parrafo.innerHTML = `Hola ${nombre}, hemos visto que tienes ${parseInt(
    edad
  )} años, puedes comenzar, la idea es que pases un juego, te animas?`);
maquinaEscribir3(texto, 100, maquina3);
