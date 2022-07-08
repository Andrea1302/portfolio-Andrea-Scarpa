import React from "react";
import { Link } from "react-router-dom";
// assets 
import Logo from '../assets/logoPortfolio.png';
// style 
import './componentsStyle/Header.css';
// components 
import Button from './ui/Button'



const Header = () => {
    return (
        <header>
            <section className="profile_info">
                <img className="logo_header" src={Logo} alt="logo" />
                <h2>Andrea Scarpa</h2>
                <div className="separator"></div>
                <span>Frontend Developer</span>
            </section>
            <section className="contact_cv">
                <Link className="download" to="../assets/file/AndreaScarpaCV.pdf" target="_blank" download>SCARICA IL MIO CV</Link>
                <Button styleBtn={{marginLeft : '24px'}} text="CONTATTAMI"></Button>
            </section>
        </header>
    )
}
export default Header