import volverAJugar from "./volverAJugar.js";
import {getListPreguntasLocal, setListPreguntasLocal} from "./helpers.js";

const agregarPregunta = (preguntas) =>{
    let contenedor = document.querySelector("#contenedorJuego");
    let preguntaBody = document.querySelector("#preguntaBody");
    let respuesta = document.querySelector("#preguntasBody");
    let hora = document.querySelector("#hora");
    const contador = document.getElementById("contador");
    const crearPreg =  document.querySelector("#crearPreg"); 
    contador.classList.add("none");

    hora && hora.classList.add("none");
    
    preguntaBody.remove();
    respuesta.remove();

    let pregunta = document.createElement("div");
    pregunta.id = "preguntaBody";
    pregunta.className = "preguntaBody";
    let respuestas = document.createElement("div");
    respuestas.id = "preguntasBody";
    respuestas.className = "game__card__preguntas";


    pregunta.innerHTML = `<h2 class="pregunta3">Agregue la Pregunta:</h2>
                          <input type="text" class="pregunta3" id="preguntaNueva" />`;
  
    respuestas.innerHTML = `<h2 class="pregunta3">Agregue las Respuestas:</h2>
                            <input type="text" class="pregunta3" id="respuestaNueva1" />
                            <input type="text" class="pregunta3" id="respuestaNueva2" />
                            <input type="text" class="pregunta3" id="respuestaNueva3" />
                            <input type="text" class="pregunta3" id="respuestaNueva4" />
                            <h2 class="pregunta3">Respuesta Correcta:</h2>
                            <h4> Debe esribirla igual a como la agrego arriba</h4>
                            <input type="text" class="pregunta3" id="respuestaCorrecta" />
                            <div class="btn_enviar">
                                <button class="btn__agregar" id="btn__agregar">Enviar y Jugar</button>
                            </div>`;

    contenedor.appendChild(pregunta);
    contenedor.appendChild(respuestas);
    crearPreg.classList.add("none");
    const botonEnviar = document.querySelector("#btn__agregar");
    const guardarYEnviar = () =>{

        const listPreguntas = getListPreguntasLocal();
        
        const preguntaNueva = document.querySelector("#preguntaNueva").value;

        const respuestaNueva1 = document.querySelector("#respuestaNueva1").value;
        const respuestaNueva2 = document.querySelector("#respuestaNueva2").value;
        const respuestaNueva3 = document.querySelector("#respuestaNueva3").value;
        const respuestaNueva4 = document.querySelector("#respuestaNueva4").value;

        const respuestaCorrecta = document.querySelector("#respuestaCorrecta").value;

        let newPregunta = {
            "id" : listPreguntas.length +1,
            "tipo" : "Arte",
            "pregunta" : preguntaNueva,
            "respuesta1" : respuestaNueva1,
            "respuesta2" : respuestaNueva2,
            "respuesta3" : respuestaNueva3,
            "respuesta4" : respuestaNueva4,
            "respuestaCorrecta" : respuestaCorrecta
        }

        listPreguntas.push(newPregunta);
        setListPreguntasLocal(listPreguntas);
        Toastify({
            text: "PREGUNTA NUEVA AÑADIDA",
            duration: 3000,
            className: "info",
            gravity: "bottom",
            position: "center",
            style: {
              background:
                "linear-gradient(rgba(43, 247, 25, 0.7), rgba(44, 231, 7, 0.7))",
            },
          }).showToast();
        volverAJugar(preguntas);
    }
    botonEnviar.addEventListener("click", ()=> guardarYEnviar());
};


export { agregarPregunta };
