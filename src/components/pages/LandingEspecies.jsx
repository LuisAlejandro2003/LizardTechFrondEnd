import NavbarLanding from "../organism/landing/NavbarLanding";
import FooterLanding from "../organism/landing/FooterLanding";
import ImgInformation from "../organism/landing/ImgInformatio";
import Carrusel from "../organism/landing/Carrusel";
import Title from "../../components/atoms/Title";
import "../../assets/style/especies.css"

function LandingP3() {
    return (
        <>
            <NavbarLanding />
            <ImgInformation />
            <div className="a">
                <Title msn={"Especies"} />
            </div>
            <Carrusel />
            <FooterLanding />
        </>
    );
}

export default LandingP3;