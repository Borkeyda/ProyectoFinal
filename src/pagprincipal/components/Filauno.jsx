import React from 'react'
import "../styles/Filas.css"
import im1 from "../images/Productos.png"
import im2 from "../images/Pofertas.png"

function Filauno() {
    return (
        <div className='cont-filauno'>
            <div className='carduno'>
                <img src={im1} alt="Productos" />
                <span>Ir a productos</span>
            </div>
            <div className='carddos'>
                <img src={im2} alt="Productos en oferta" />
                <span>Ir a ofertas</span>
            </div>
        </div>
    )
}

export {Filauno}