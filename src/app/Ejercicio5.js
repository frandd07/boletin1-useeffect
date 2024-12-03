import React, { useState, useEffect } from "react";

function Ejercicio5(){
  const [ancho, setAncho] = useState(window.innerWidth);

  useEffect(() => {
    const actualizarAncho = () => {
      setAncho(window.innerWidth);
    };

    window.addEventListener("resize", actualizarAncho);
    return () => {
      window.removeEventListener("resize", actualizarAncho);
    };
  }, []); 

  return (
    <div>
      <h1>Ejercicio 5: Tamaño de la ventana</h1>
      <br/>
      <h5>Ancho actual: {ancho}px</h5>
    </div>
  );
};

export default Ejercicio5;
