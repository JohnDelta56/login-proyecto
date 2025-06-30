import { useState } from "react";
import { motion } from "framer-motion";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

 const handleLogin = async e => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8000/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(`✅ ${data.message || "Login exitoso"}`);
    } else {
      setMessage(`❌ ${data.error || "Credenciales incorrectas"}`);
    }
  } catch (error) {
    setMessage("⚠️ Error de red o del servidor");
    console.error("Error durante login:", error);
  }
};

  return (
    <div className="container mt-5">
    <motion.div
className="card p-4"
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
>
<h3 className="mb-4 text-center">Iniciar Sesión</h3>
<input
className="form-control mb-3"
placeholder="Usuario"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<input
className="form-control mb-3"
type="password"
placeholder="Contraseña"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button className="btn btn-primary w-100" onClick={handleLogin}>
Entrar
</button>
{message && <div className="alert alert-info mt-3">{message}</div>}
</motion.div>
</div>
    /*<motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <input type="text" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Entrar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </motion.form>*/
  );
}

export default Login;




/*Lo que sigue es un ejemplo de una aplicación React que se conecta a un backend Django para manejar el inicio de sesión de usuarios. Utiliza Framer Motion para animaciones y Bootstrap para estilos.
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const res = await fetch('http://localhost:8000/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      setMessage('✅ Login exitoso');
    } else {
      setMessage('❌ Usuario o contraseña incorrectos');
    }
  };
  return (
  <div className="container mt-5">
    <motion.div
      className="card p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
    <h3 className="mb-4 text-center">Iniciar Sesión</h3>
    <input
      className="form-control mb-3"
      placeholder="Usuario"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      className="form-control mb-3"
      type="password"
      placeholder="Contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button className="btn btn-primary w-100" onClick={handleLogin}>
      Entrar
    </button>
    {message && <div className="alert alert-info mt-3">{message}</div>}
  </motion.div>
</div>
 );
}
export default App;*/