
const fetchHora =(hora)=> {
    fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Cordoba")
    .then(resp => resp.json())
    .then(res => {
        const date = new Date(res.datetime);
        hora.innerText = ` Juego comenzado a las : ${date.getHours()}:${date.getMinutes()}`
    });
}


export {fetchHora};