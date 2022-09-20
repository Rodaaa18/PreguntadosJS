const LIST_PREGUNTAS_LLAVE = "listPreguntas";

export default function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export const actualizarContador = (preguntas) => {
    const listPreguntas = localStorage.getItem(LIST_PREGUNTAS_LLAVE)
    const contador = document.getElementById("contador");
    contador.innerText = `${preguntas.length} de ${JSON.parse(listPreguntas).length}`;
  }

export const setListPreguntasLocal = (lista) => {
  localStorage.setItem(LIST_PREGUNTAS_LLAVE, JSON.stringify(lista))
}

export const getListPreguntasLocal = () => {
  return JSON.parse(localStorage.getItem(LIST_PREGUNTAS_LLAVE))
}