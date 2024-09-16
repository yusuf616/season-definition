import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/Home";
import { Thanks } from "./pages/thanks";


export const App=()=>{
    return (<div className="app">
        <BrowserRouter>
            <Routes>
                <Route element={<Outlet/>}>
                    <Route path={routes?.home} element={<Home/>} />
                    <Route path="/thanks" element={<Thanks/>} />
                </Route>
            </Routes>
        </BrowserRouter>    
    </div>);
}