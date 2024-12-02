import { useEffect, useState } from "react";

function Ejercicio3(){
    const [contador,setContador] = useState(0);
    const incrementar = () => {
        setContador(contador + 1);
    }

    useEffect(() => {
        document.title = `Contador: ${contador}`
    },[contador]);

    return(
        <>
        <h1>Ejercicio 3: Contador con efectos</h1>
        <h4>Numero de clicks: {contador}</h4>
        <button onClick={incrementar}>Incrementar</button>
        </>
    );

}

export default Ejercicio3;