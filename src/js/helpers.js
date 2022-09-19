export default function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const actualizarContador = (preguntas, json) => {
    const contador = document.getElementById("contador");
    contador.innerText = `${preguntas.length} de ${json.length}`;
  }
  export {actualizarContador};