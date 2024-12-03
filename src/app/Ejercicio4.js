import { useEffect, useState } from "react";

function Ejercicio4(){
const[segundos,setSegundos] = useState(0);
useEffect(()=>{
    const intervalo = setInterval(()=>{
        setSegundos(segundos+1);
    },1000);

    return()=>clearInterval(intervalo);
},[segundos]);

return(
    <div>
    <h1>Ejercicio 4: Temporizador</h1>
    <br/>
    <h5>Segundos: {segundos}</h5>
    </div>
);
}

export default Ejercicio4;