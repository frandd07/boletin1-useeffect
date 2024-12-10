import React, { useState, useEffect } from 'react';

function Ejercicio7() {
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  useEffect(() => {
    const estadoAutenticacionGuardado = localStorage.getItem('estaAutenticado');
    if (estadoAutenticacionGuardado === 'true') {
      setEstaAutenticado(true);
    }
  }, []);

  const iniciarSesion = () => {
    const usuarioGuardado = localStorage.getItem('usuario');
    const contrasenaGuardada = localStorage.getItem('contrasena');

    if (usuario === usuarioGuardado && contrasena === contrasenaGuardada) {
      setEstaAutenticado(true);
      setMensajeError('');
      localStorage.setItem('estaAutenticado', 'true');
    } else {
      setMensajeError('Usuario o contraseña incorrectos');
    }
  };

  const cerrarSesion = () => {
    setEstaAutenticado(false);
    localStorage.setItem('estaAutenticado', 'false');
  };

  const registrar = () => {
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('contrasena', contrasena);
    alert('Usuario registrado con éxito');
  };

  return (
    <div>
    <h1>Ejercicio 8: Iniciar sesión utilizando Local Storage</h1>

      {estaAutenticado ? (
        <div>
          <button onClick={cerrarSesion}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <button onClick={iniciarSesion}>Iniciar sesión</button>
          <button onClick={registrar}>Registrar usuario</button>

           <p>{mensajeError}</p>
        </div>
      )}
    </div>
  );
}

export default Ejercicio7;
