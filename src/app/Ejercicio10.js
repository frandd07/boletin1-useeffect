import React, { useState, useEffect } from 'react';

function Ejercicio10() {
  const [carrito, setCarrito] = useState([]);
  const [nombreProducto, setNombreProducto] = useState('');

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    if (carritoGuardado) {
      setCarrito(carritoGuardado);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = () => {
    if (nombreProducto) {
      const nuevoProducto = {
        id: carrito.length + 1, 
        nombre: nombreProducto,
      };
      setCarrito((prevCarrito) => [...prevCarrito, nuevoProducto]);
      setNombreProducto('');
    }
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== productoId));
  };

  return (
    <div>
      <h1>Ejercicio 10: Carrito de la compra</h1>
      
      <div>
        <h5>Productos en el carrito:</h5>
        <ul>
          {carrito.map((producto) => (
            <li key={producto.id}>
              {producto.nombre}
              <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <input
          type="text"
          value={nombreProducto}
          onChange={(e) => setNombreProducto(e.target.value)}
          placeholder="Nombre del producto"
        />
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default Ejercicio10;
