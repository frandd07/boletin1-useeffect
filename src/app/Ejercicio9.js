import React, { useState, useEffect } from 'react';

function Ejercicio9() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('En cada renderizado');
  });

  useEffect(() => {
    console.log('Cuando el contador cambia', contador);
  }, [contador]);

  return (
    <div>
        <h1>Ejercicio 9: Contador</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Ejercicio9;
