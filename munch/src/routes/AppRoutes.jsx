import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
 import Productpage from "../pages/Productpage";
import Contactpage from "../pages/Contactpage";


const AppRoutes=()=>{
    return(
        <div>
            <BrowserRouter>
              <Routes>
                 <Route path="/" element={<HomePage/>} /> 
                 <Route path="/about" element={<AboutPage/>} /> 
                  <Route path="/product" element={<Productpage/>} /> 
                  <Route path="/contact" element={<Contactpage/>} /> 
              </Routes>
            </BrowserRouter>
        </div>
    )
};
export default AppRoutes;
