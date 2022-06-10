import React from 'react'
import "../styles/Cardart.css"

function Cardart({img, name, precio}) {
    return (
        <div className='cards-art'>
            <div className='imagenes-art'>
                <img src={img} alt="Imagen articulos deportivos" />
            </div>
            <div className='informacion-art'>
                <span>{name} </span>
                <span>{precio} </span>
            </div>
        </div>
    )
}

export {Cardart}