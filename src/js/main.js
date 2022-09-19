class Objeto {
  constructor(nombre, descripcion, cantidad) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
  }

  descontarCantidad(descuento) {
    this.cantidad -= descuento;
  }
}

const Objetos = [
  {
    nombre: "Tararira",
    descripcion: "Un pescado fresco, con una buena calidad",
    cantidad: 6,
  },
  {
    nombre: "Leña",
    descripcion: "Troncos de arboles y ramas caidas",
    cantidad: 5,
  },
  {
    nombre: "Agua mineral",
    descripcion: "Agua de la maleta del Capitán",
    cantidad: 800,
  },
];

const encontrarLeña = () => {
  Objetos.find((objeto) => {
    if (objeto.nombre === "Leña") {
      return alert(`He encontrado ${objeto.nombre}`);
    }
  });
};
const pescar = () => {
  Objetos.filter((pescado) => {
    if (pescado.nombre === "Tararira") {
      return alert(`He pescado una ${pescado.nombre}`);
    }
  });
};
// -------------------------------------------------Inicio de la APP------------------------------------------
let name = prompt("Bienvenido! ¿Cómo te llamas?");
alert(`Hola ${name}!, es un gusto conocerte!`);
let pregunta = prompt(
  "Te haremos unas preguntas antes de decirte por que estás aca, te molestaría responder?"
);
// -------------------------------------------------Items mockeados y funcion ----------------------------
let itemsValija = ["Snacks", "Ropa", "Mapa", "Artefacto Tiempo/Clima"];

const mostrarItems = () => {
  itemsValija.map((item) => {
    alert(item);
  });
};

// -------------------------------------------------Preguntas y respuestas------------------------------------------
const preguntasJuego = (preguntaJuego, stop) => {
  while (preguntaJuego.toLowerCase() == "si" && stop.toLowerCase() == "si") {
    alert(
      "Bien, resulta que ibas en un avión de viaje, pero hubo un inconveniente con el motor!, el avión cayó y solo sobreviviste tu :(, lo sentimos mucho. Lo que sabemos es que te buscaran en un par de días tienes que tratar de sobrevivir hasta entonces!"
    );
    alert(
      `En la costa de la isla a la cual llegaste, hay una valija, la misma contiene algunas cosas, te las enseñare:`
    );
    mostrarItems();
    alert("Era la valija del Piloto!");
    let mapa = prompt("¿Quieres ver el mapa?");
    if (mapa.toLowerCase() == "si") {
      alert("Bien, aqui esta el mapa");
    } else alert("Bien, pero te hubiese sido util para lo que se viene!");
    let tiempo = prompt("¿Quieres ver el tiempo?");
    if (tiempo.toLowerCase() == "si") {
      alert("Bien, aqui esta el tiempo");
    } else alert("Bien, pero te hubiese sido util para lo que se viene!");
    preguntaJuego;
    alert(
      "Bien, ahora tienes el mapa y el tiempo, resulta que te vendrán a rescatar justo cuando el tiempo esté soleado y en un punto de la isla donde se encuentra una llanura que podría servir de pista de aterrizaje, por lo que si no viste el mapa y el tiempo, me temo que no nos salvaremos :("
    );
    alert("Bien, ahora comenzarán a pasar los días, mucha suerte!");
    let dias = 2;
    // -------------------------------------------------Loop de dias------------------------------------------
    for (let i = 1; i <= dias; i++) {
      let dia = alert(`Hoy es el día ${i}`);
      if (i == 1) {
        alert(
          "Hoy me temo que el tiempo no nos acompaña, pero debemos tratar de sobrevivir!"
        );
        alert(
          "Debemos buscar comida, te he dado una lanza que arme para que puedas pescar!"
        );
        let pesca = prompt("¿Quieres pescar?");
        if (pesca.toLowerCase() == "si") {
          alert("Bien, ahora puedes pescar!");
          pescar();
          alert("Ve a buscar leña seca y yo me encargo del fuego");
          encontrarLeña();
          let leña = prompt("¿Estaba seca?");
          if (leña.toLowerCase() == "si") {
            alert("Fuego encendido, a cocinar el pescado!!");
            alert("Pescado cocinado, ahora puedes tomarlo!");
            alert(
              "He descubierto que había una botella de agua en la valija! Tomala pero bebe despacio, tendrá que durarnos los dos días!"
            );
            alert("Se acerca la noche, donde dormiras?");
            alert("No! Jaja, no puedes meterte dentro de valija!");
            alert(
              "Arma una choza con ramas de arboles y troncos, eso nos serviría!"
            );
            let choza = prompt("Pudiste armarla?");
            if (choza.toLowerCase() == "si") {
              alert(
                "Bien, a descansar, mañana trataremos de hacer lo mismo y sobreviviremos!!"
              );
            } else alert("Sin dormir no podemos sobrevivir, hemos perdido :(");
          }
        }
      } else {
        alert(
          "Hoy hay buen tiempo!, debemos apresurarnos para llegar a tiempo a la plataforma!"
        );
        alert(
          "Hoy necesitarás muchas energías, bebe el resto del agua ahora así podemos comenzar el viaje a la plataforma"
        );
        let oportunidad = prompt("¿Bebiste el agua?");
        if (oportunidad.toLowerCase() == "si") {
          alert("Bien, a correr que escucho el ruido del avión!");
          let visual = prompt("¿Ves la plataforma? Yo si!!");
          if (visual.toLowerCase() == "si") {
            alert(
              "Dirigete a la parte derecha de la misma, alli podremos esperar y subir al avión!"
            );
            alert("El avión está aqui, subete!");
            let subir = prompt("Pudiste subir?");
            if (subir.toLowerCase() == "si") {
              alert(
                "Bien, por fin! Nos dirigimos a casa! Gracias por participar, te daremos un premio sorpresa al llegar ;)"
              );
              stop = prompt("Deseas volver a jugar?");
            } else alert("El avion se ha ido sin nosotros, perdimos :(");
          } else
            alert(
              "Has tomado el camino equivocado, el avion no nos ha visto y ha regresado. Perdimos :("
            );
        } else
          alert(
            "Se te ha caido el agua!!! Me temo que no tendrás energías para llegar. Perdimos :("
          );
      }
    }
  }
};
// -------------------------------------------------------Inicio del Juego--------------------------------
if (pregunta.toLowerCase() == "no") {
  alert("Bien, ¡Comencemos!");
  let años = prompt("¿En que año naciste?");
  let añoActual = 2022;
  let edad = añoActual - años;
  alert(`Bien, tienes ${edad} años`);
  if (edad < 18) {
    alert("Lo siento, no puedes seguir! Te esperamos cuando cumplas 18 años");
  }
  let preguntaJuego = prompt(
    "Bueno, te comentamos, la idea es que juegues un juego... ¿Aceptas?"
  );
  let stop = "si";
  preguntasJuego(preguntaJuego, stop);
} else pregunta.toLowerCase() == "si";
alert("Bien, muchas gracias por participar, nos vemos en la próxima!");
