const Perdiste = () => {
    let start = document.querySelector("#start");
    let perdiste = document.querySelector("#perdiste");
    let bodyPreg = document.querySelector("#preguntaBody");
    let bodyPregs = document.querySelector("#preguntasBody");
    let hora = document.getElementById("hora");
    const contador = document.getElementById("contador");
    let btnAgregar = document.querySelector("#crearPreg");

    
    btnAgregar.classList.add("none")
    contador.classList.add("none")
    hora.classList.add("none");
    start.classList.remove("start");
    start.classList.add("startAfter");
    perdiste.classList.remove("none");
    perdiste.classList.add("game__card__end");
    bodyPreg.classList.remove("preguntaBody");
    bodyPreg.classList.add("none");
    bodyPregs.classList.remove("game__card__preguntas");
    bodyPregs.classList.add("none");
  };

  export {Perdiste};