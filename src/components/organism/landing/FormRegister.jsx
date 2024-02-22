import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Title from "../../atoms/Title";
import SubTitle from "../../atoms/SubTitle";
import { useNavigate } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph";
import WrapperLabel from "../../molecules/landing/WraperLabel";
import Swal from "sweetalert2";
import Imgs from "../../../assets/js/img";
import "../../../assets/style/register.css";

function FormRegister() {
    
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://34.233.172.135:8080/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, correo, password }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        Swal.fire({
          title: "Exito!",
          text: "Bienvenido a LizardTech",
          icon: "success",
        }).then(() => {
          // Navigate to /IniciarSesion after form submission
          navigate("/IniciarSesión");
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Error al registrase, intente de nuevo",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        icon: "error",
      });
    }
  };

  return (
    <div className="padre">
      <div className="register">
        <motion.div
          className="form"
          initial={{ opacity: 1, x: 770 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SubTitle msn={"Registrarse"} />
          <div className="section">
            <form onSubmit={handleSubmit}>
              <div className="box">
                <input
                  className="form-input"
                  type={"text"}
                  placeholder={" "}
                  name={"nombre"}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <label className="form-label">Nombre:</label>
                <img src={Imgs.User} />
              </div>
              <div className="box">
                <input
                  className="form-input"
                  type={"text"}
                  placeholder={" "}
                  name={"correo"}
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
                <label className="form-label">Correo:</label>
                <img src={Imgs.Email} />
              </div>
              <div className="box">
                <input
                  className="form-input"
                  type={"password"}
                  placeholder={" "}
                  name={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label">Contraseña:</label>
                <img src={Imgs.Lock} />
              </div>
              <button type="submit" className="btn">
                Crear cuenta
              </button>
              {/* ... */}
            </form>
          </div>
          <div className="boton"></div>
        </motion.div>
        <motion.div
          className="information"
          initial={{ opacity: 1, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="title">
            <Title msn={"LizardTech"} />
          </div>
          <div className="welcome">
            <SubTitle msn={"Bienvenido"} />
          </div>
          <div className="text">
            <Paragraph
              text={
                "¿Ya nos sigues en nuestras redes sociales? Si quieres estar al tanto de nuestras actualizaciones y novedades, ¡síguenos!"
              }
            />
          </div>
          <ul className="redes">
            <li>
              <Link to="https://www.facebook.com">
                <img src={Imgs.imgFace} />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com">
                <img src={Imgs.imgTwit} />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com">
                <img src={Imgs.imgInst} />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com">
                <img src={Imgs.imgLink} />
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default FormRegister;
