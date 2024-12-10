import React, { useState, useEffect } from 'react';

function Ejercicio8() {
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const recibirMensaje = () => {
    setNuevoMensaje(`Nuevo mensaje recibido a las ${new Date().toLocaleTimeString()}`);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      recibirMensaje();
    }, 5000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  useEffect(() => {
    if (nuevoMensaje) {
      setMensajes((mensajes) => [...mensajes, nuevoMensaje]);
    }
  }, [nuevoMensaje]);

  return (
    <div>
      <h1>Ejercicio 8: Chat en vivo</h1>
      <div className="chat-container">
        {mensajes.map((mensaje, index) => (
          <p key={index}>{mensaje}</p>
        ))}
      </div>
    </div>
  );
}

export default Ejercicio8;
