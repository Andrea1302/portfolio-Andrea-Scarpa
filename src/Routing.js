import React from "react";
import { Routes, Route } from "react-router-dom";

// components 
import Layout from "./components/Layout";


function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    
                </Route>
            </Routes>
        </>
    );
}

export default Routing