import React from "react";
import '../uiStyle/Button.css'
const Button = ({ text, callback, cssCustom, bg }) => {
    return (
        <button className={bg === 'primary' ? `${cssCustom} primary` : `${cssCustom} secondary`
        } onClick={callback} >
            {text}
        </button >
    )
}
Button.defaultProps = {
    cssCustom: 'defaultBtn',
    bg: 'primary'
}
export default Button