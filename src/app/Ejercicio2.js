import { useEffect } from "react";

function Ejercicio2(){
    useEffect(() => {
        document.title = "Bienvenidos a mi app"
    },[]);
return(
    <h1>Ejercicio 2: Cambiar el título de la pestaña</h1>
);
}

export default Ejercicio2;