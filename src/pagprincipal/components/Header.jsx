import React from 'react'
import "../styles/Header.css"
import imlogo from "../images/logo.jpg"

function Header() {
    return (
        <header className='header-suchas'>
            <img src={imlogo} alt="Logo tienda" />
            <span>Tienda Deportiva Suchas</span>
        </header>
    )
}

export {Header}