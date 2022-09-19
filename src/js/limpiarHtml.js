const limpiarHTML = () => {
    let pregunta = document.querySelector("#preguntaBody");
    let respuesta = document.querySelector("#preguntasBody");
    
    const contador = document.getElementById("contador");

    contador.classList.add("none");
    
    pregunta.remove();
    respuesta.remove();
  };

  export {limpiarHTML};