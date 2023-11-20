import NavbarLanding from "../../components/organism/landing/NavbarLanding";
import FooterLanding from "../../components/organism/landing/FooterLanding";
import ImgInformation from "../../components/organism/landing/ImgInformatio";
import "../../assets/style/landing.css";

function LandingP1() {
    return (
        <>
            <NavbarLanding />
            <ImgInformation />
            <FooterLanding />
        </>
    );
}

export default LandingP1;