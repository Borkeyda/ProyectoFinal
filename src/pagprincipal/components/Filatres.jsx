import React from 'react'
import "../styles/Filas.css"
import im4 from "../images/Promotes.png"
import im5 from "../images/Ubicacion.png"

function Filatres() {
    return (
        <div className='cont-filatres'>
            <div className='cardcua'>
                <img src={im4} alt="Promotores" />
                <span>Ir a promotores</span>
            </div>
            <div className='cardcin'>
                <img src={im5} alt="Ubicacion" />
                <span>Ir a ubicacion</span>
            </div>
        </div>
    )
}

export {Filatres}