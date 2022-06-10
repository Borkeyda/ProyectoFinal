import React from 'react'
import "../styles/Cardpum.css"

function Cardpum({img, name, precio}) {
    return (
        <div className='cards-puma'>
            <div className='imagenes-puma'>
                <img src={img} alt="Imagen producto puma" />
            </div>
            <div className='informacion-puma'>
                <span>{name} </span>
                <span>{precio} </span>
            </div>
        </div>
    )
}

export {Cardpum}