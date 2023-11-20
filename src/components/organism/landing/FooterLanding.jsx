import { Link } from "react-router-dom";
import Imgs from "../../../assets/js/img"
import "../../../assets/style/footer.css"

function FooterLanding() {
    return (
        <footer>
            <div className="logoFooter">
                <img className="logo" src={Imgs.imgL1} />
            </div>
            <ul className="redes">
                <li><Link to="https://www.facebook.com"><img src={Imgs.imgFace} /></Link></li>
                <li><Link to="https://twitter.com"><img src={Imgs.imgTwit} /></Link></li>
                <li><Link to="https://www.instagram.com"><img src={Imgs.imgInst} /></Link></li>
                <li><Link to="https://www.linkedin.com"><img src={Imgs.imgLink} /></Link></li>
            </ul>
        </footer>
    );
}

export default FooterLanding;