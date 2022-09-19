import { limpiarHTML } from "./limpiarHtml.js";


export default function volverAJugar(preguntas){
    
    let total = preguntas.length;
    preguntas.splice(0, total);
  
    let start = document.querySelector("#start");
    let perdiste = document.querySelector("#perdiste");
  
    limpiarHTML();
  
    start.classList.remove("startAfter");
    start.classList.add("start");
    perdiste.classList.remove("game__card__end");
    perdiste.classList.add("none");
    
  };
   

 