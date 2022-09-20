const limpiarHTML = () => {
    let pregunta = document.querySelector("#preguntaBody");
    let respuesta = document.querySelector("#preguntasBody");
    
    
    
    pregunta.remove();
    respuesta.remove();
  };

  export {limpiarHTML};