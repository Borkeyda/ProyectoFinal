import React from 'react'
import "../styles/Cardnik.css"

function Cardnik({img, name, precio}) {
    return (
        <div className='cards-nik'>
            <div className='imagenes-nike'>
                <img src={img} alt="Imagen producto nike" />
            </div>
            <div className='informacion-nike'>
                <span>{name} </span>
                <span>{precio} </span>
            </div>
        </div>
    )
}

export {Cardnik}