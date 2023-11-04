import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../../components/organism/BodyDashboard/Body";
import App from "../../App";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App></App>}>
                      <Route index element={<Body></Body>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;