import React from "react";
import { Routes, Route } from "react-router-dom";

// components 
import EntryPage from "./components/EntryPage";
import Layout from "./components/Layout";


function Routing() {
    return (

        <Routes>
            <Route path="/" element={<EntryPage />} />
            <Route path="/home" element={<Layout />}>

            </Route>
        </Routes>

    );
}

export default Routing