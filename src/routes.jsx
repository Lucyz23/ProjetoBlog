import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Totoro from "./Components/Totoro";
import Princess from "./Components/Princess";
import Castle from "./Components/Castle";
import Chihiro from "./Components/Chihiro";
import Kiki from "./Components/Kiki";

export default function RoutesFile() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/header"element={<Header />} />
            <Route path="/" element={<Login />} />
            <Route path="/totoro" element={<Totoro />} />
            <Route path="/princess" element={<Princess />} />
            <Route path="/castle" element={<Castle />} />
            <Route path="/chihiro" element={<Chihiro />} />
            <Route path="/kiki" element={<Kiki />} />
        </Routes>
        </BrowserRouter>
    )
}