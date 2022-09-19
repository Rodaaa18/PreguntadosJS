const maquina3 = document.getElementById("maquina-escribir3");

const texto = maquina3.innerHTML;
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

maquinaEscribir3(texto, 100, maquina3);

// --------------------------------------FirstPAge --------------------------------

// const getValueInput = (e) => {
//   e.preventDefault();
//   let añoNacimiento = document.getElementById("age").value;
//   let anoActual = 2022;
//   let age = anoActual - parseInt(añoNacimiento);
//   console.log(age);
//   document.querySelector(
//     "#valueInput"
//   ).innerHTML = `First input value: ${age} `;
// };
// segundoBoton.onclick(getValueInput());
