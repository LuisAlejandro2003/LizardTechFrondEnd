import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../../components/organism/DashboardView/Body";
import App from "../../App";
import Home from "../../components/pages/Home";
import History from "../../components/pages/History";
import Statistics from "../../components/pages/Statistics";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/statistics' element={<Statistics />} />

            </Routes>
        </BrowserRouter>
        </div >
    );
}

export default Router;