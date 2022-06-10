import React from 'react'
import "../styles/Filados.css"
import im3 from "../images/artidepo.jpg"

function Filados() {
    return (
        <div className='cont-filados'>
            <div className='cardtres'>
                <img src={im3} alt="Articulos deportivos" />
                <span>Ir a Articulos deportivos</span>
            </div>
        </div>
    )
}

export {Filados}