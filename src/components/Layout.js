import React from "react"

import Button from "./ui/Button"
const Layout = () => {
    return (
        <>
        Layout 
            <Button text="ciao" callback={()=>console.log('ciao')}/>
        </>
    )
}

export default Layout