import { Link } from "react-router-dom";
import WrapperLabel from "../../molecules/landing/WraperLabel";
import Imgs from "../../../assets/js/img"
import "../../../assets/style/navbarL1.css";

function NavbarLanding() {
    return (
        <header>
            <img className="logo" src={Imgs.imgL1} />
            <nav>
                <ul>
                    <li><Link to="/" className="links"><WrapperLabel msn="INICIO" /></Link></li>
                    <li><Link to="/SobreNosotros" className="links"><WrapperLabel msn="SOBRE NOSOTROS" /></Link></li>
                    <li><Link to="/Especies" className="links"><WrapperLabel msn="ESPECIES" /></Link></li>
                    <li><Link to="/IniciarSesión" className="links"><WrapperLabel msn="INICIAR SESIÓN" /></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavbarLanding;