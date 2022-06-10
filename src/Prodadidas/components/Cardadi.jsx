import React from 'react'
import "../styles/Cardadi.css"

function Cardadi({img, name, precio}) {
    return (
        <div className='cards-adi'>
            <div className='imagenes-adi'>
                <img src={img} alt="Imagen producto adidas" />
            </div>
            <div className='informacion-adi'>
                <span>{name} </span>
                <span>{precio} </span>
            </div>
        </div>
    )
}

export {Cardadi}