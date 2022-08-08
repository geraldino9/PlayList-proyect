import React from "react";
import {Route, BrowserRouter, Routes } from "react-router-dom";
// import SpotifyLoguin from "../views/SpotifyLoguin";
import HomePage from "../views/HomePage/HomePage";


export default function Routes2(){
    return (
        <BrowserRouter>
            <Routes>            
                {/* <Route exact path="/"  element={Home}  />            */}
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
} 
