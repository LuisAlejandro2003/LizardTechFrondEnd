import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import Title from "../../atoms/Title"
import SubTitle from "../../atoms/SubTitle"
import Paragraph from "../../atoms/Paragraph"
import WrapperLabel from "../../molecules/landing/WraperLabel";
import Imgs from "../../../assets/js/img"
import "../../../assets/style/login.css";
import React, { useState } from 'react';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correo: 'alejandro2003@gmail.com',
                password: '123456',
                }),
            });
    
            if (response.ok) {
                console.log('ok')
                const data = await response.json();
                // Guarda el token en el local storage
                localStorage.setItem('token', data.token);
                // Realiza otras acciones después de iniciar sesión correctamente
            } else {
                console.error('Error en la solicitud:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
        }
    };
    

    return (
        <div className="padre">
            <div className="login">
                <motion.div className="information"
                    initial={{ opacity: 1, x: 400 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}>
                    <div className="title">
                        <Title msn={"LizardTech"} />
                    </div>
                    <div className="welcome">
                        <SubTitle msn={"Bienvenido"} />
                    </div>
                    <div className="text">
                        <Paragraph text={"¿Ya nos sigues en nuestras redes sociales? Si quieres estar al tanto de nuestras actualizaciones y novedades, ¡síguenos!"} />
                    </div>
                    <ul className="redes">
                        <li><Link to="https://www.facebook.com"><img src={Imgs.imgFace} /></Link></li>
                        <li><Link to="https://twitter.com"><img src={Imgs.imgTwit} /></Link></li>
                        <li><Link to="https://www.instagram.com"><img src={Imgs.imgInst} /></Link></li>
                        <li><Link to="https://www.linkedin.com"><img src={Imgs.imgLink} /></Link></li>
                    </ul>
                </motion.div>
                <motion.div className="form"
                    initial={{ opacity: 1, x: -770 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}>
                    <SubTitle msn={"Iniciar sesión"} />
                    <div className="section">
                        <form>
                            <div className="box">
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder=" "
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label className="form-label">Correo:</label>
                            </div>

                            <div className="box">
                                <input
                                    className="form-input"
                                    type="password"
                                    placeholder=" "
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label className="form-label">Contraseña:</label>
                            </div>


                            <div className="recuperar">
                                <Link to="/Registrarse" className="links"><WrapperLabel msn="Recuperar contraseña" /></Link>
                            </div>
                            <button type="button" className="btn" onClick={handleLogin}>
                                Iniciar Sesión
                            </button>
                            <div className="change">
                                <label>¿Todavía no tienes una cuenta? </label>
                                <Link to="/Registrarse" className="links"><WrapperLabel msn="Crear cuenta" /></Link>
                            </div>
                            <div className="btn-home">
                                <label>¿Quieres ir al inicio? haz click en el boton</label>
                                <Link to="/" className="regresar"><img className="arrow" src={Imgs.FlechaDerecha} /></Link>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default FormLogin;



{/* <BoxForm type={"text"} name={"nombre"} msn={"Nombre de usuario"} /> */ }