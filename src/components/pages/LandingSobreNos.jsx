import NavbarLanding from "../organism/landing/NavbarLanding";
import FooterLanding from "../organism/landing/FooterLanding";
import ImgInformation from "../organism/landing/ImgInformatio";
import InformationCards from "../organism/landing/InformationCards";
import Title from "../../components/atoms/Title";

function LandingP2() {
    return (
        <>
            <NavbarLanding />
            <ImgInformation />
            <div className="text-about">
                <Title msn={"Sobre Nosotros"} />
            </div>
            <InformationCards/>
            <FooterLanding />
        </>
    );
}

export default LandingP2;