import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router";
import './uiStyle/EntryPage.css';
import Logo from '../assets/logoPortfolio.png'
const EntryPage = () => {
    const navigate = useNavigate()

    const [state, setState] = useState({
        isFirstAnimationFinished: false,
    })

    const logoRef = useRef(null)
    const scaleAnimation = useRef(null)

    useEffect(() => {
        logoRef.current.addEventListener("animationend", callbackAnimationFinished, false);
        if (state.isFirstAnimationFinished) {
            scaleAnimation?.current.addEventListener("animationend", callbackStartWebSite, false);
        }

        return () => {
            document.removeEventListener('animationend', null)
            if (state.isFirstAnimationFinished) {
                document.removeEventListener('animationend', null)
            }
        }
    }, [state.isFirstAnimationFinished])
    const callbackAnimationFinished = () => {
        setTimeout(() => {
            setState({
                ...state,
                isFirstAnimationFinished: true
            })
        }, 1000);

    }
    const callbackStartWebSite = () => {
        navigate('home')
    }
    return (
        <div className="container entryContainer">
            <img ref={logoRef} className="logoStyle" src={Logo} alt="logo" />
            {
                state.isFirstAnimationFinished &&
                <div ref={scaleAnimation} className="second_animation"> </div>
            }
        </div>
    )
}

export default EntryPage