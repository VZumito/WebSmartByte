// src/LoginView.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Puedes crear o modificar los estilos aquí

const LoginView = () => {
    const [nameUser, setNameUser] = useState('');
    const [passUser, setPassUser] = useState('');
    const [passVisible, setPassVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Función para manejar el login
    const login = async () => {
        // Aquí va tu lógica para realizar el login y verificar las credenciales
        if (nameUser === "admin" && passUser === "admin123") {
            navigate('/home');  // Redirigir a /home después de un login exitoso
        } else {
            setErrorMessage('Credenciales incorrectas');
        }
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            
            <div className="login-form">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nameUser}
                    onChange={(e) => setNameUser(e.target.value)}
                />

                <input
                    type={passVisible ? 'text' : 'password'}
                    placeholder="Contraseña"
                    value={passUser}
                    onChange={(e) => setPassUser(e.target.value)}
                />
                <button onClick={() => setPassVisible(!passVisible)}>
                    {passVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                </button>

                <button onClick={login}>Entrar</button>

                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
        </div>
    );
};

export default LoginView;
