import { limpiarHTML } from "./limpiarHtml.js";
import volverAJugar from "./volverAJugar.js";
import json from "../../jsonMock/preguntas.json" assert { type: "json" };

const agregarPregunta =(preguntas)=>{
    let contenedor = document.querySelector("#contenedorJuego");
    let preguntaBody = document.querySelector("#preguntaBody");
    let respuesta = document.querySelector("#preguntasBody");
    let hora = document.querySelector("#hora");
    const contador = document.getElementById("contador");
    const crearPreg =  document.querySelector("#crearPreg"); 
    contador.classList.add("none");
    if(hora){
        hora.classList.add("none");
    }
    
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
    const guardarYEnviar =()=>{
        
        const preguntaNueva = document.querySelector("#preguntaNueva").value;

        const respuestaNueva1 = document.querySelector("#respuestaNueva1").value;
        const respuestaNueva2 = document.querySelector("#respuestaNueva2").value;
        const respuestaNueva3 = document.querySelector("#respuestaNueva3").value;
        const respuestaNueva4 = document.querySelector("#respuestaNueva4").value;
        console.log(preguntaNueva);
        const respuestaCorrecta = document.querySelector("#respuestaCorrecta").value;

        let jsonData = {
            "id" : json.length +1,
            "tipo" : "Arte",
            "pregunta" : preguntaNueva,
            "respuesta1" : respuestaNueva1,
            "respuesta2" : respuestaNueva2,
            "respuesta3" : respuestaNueva3,
            "respuesta4" : respuestaNueva4,
            "respuestaCorrecta" : respuestaCorrecta
        }

        fetch("../../jsonMock/preguntas.json")
        .then(res => res.json())
        .then(data =>{
            data.push(jsonData);
            console.log(data);
        });
        volverAJugar(preguntas);
    }
    botonEnviar.addEventListener("click", ()=> guardarYEnviar());
};


export {agregarPregunta};