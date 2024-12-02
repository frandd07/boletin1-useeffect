import { useEffect } from "react";

function Ejercicio1(){
    useEffect(()=>{
        console.log("El componente se ha montado");
    },[]);
return(
    <h1>Ejercicio 1: Componente</h1>
);

}

export default Ejercicio1;