import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../../components/organism/DashboardView/Body";
import App from "../../App";
import Home from "../../components/pages/Home";
import History from "../../components/pages/History";
import Statistics from "../../components/pages/Statistics";

import LandingP1 from "../../components/pages/LandingInicio"
import LandingP2 from "../../components/pages/LandingSobreNos";
import LandingP3 from "../../components/pages/LandingEspecies";
import Login from "../../components/pages/Login"
import Register from "../../components/pages/Register";









const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/statistics' element={<Statistics />} />
                    
                    <Route path="/" element={<LandingP1 />} />
                    <Route path="/SobreNosotros" element={<LandingP2 />} />
                    <Route path="/Especies" element={<LandingP3 />} />
                    <Route path="/IniciarSesión" element={<Login />} />
                    <Route path="/Registrarse" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div >
    );
}

export default Router;