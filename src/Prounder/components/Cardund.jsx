import React from 'react'
import "../styles/Cardund.css"

function Cardund({img, name, precio}) {
    return (
        <div className='cards-und'>
            <div className='imagenes-und'>
                <img src={img} alt="Imagen producto Under Armour" />
            </div>
            <div className='informacion-und'>
                <span>{name} </span>
                <span>{precio} </span>
            </div>
        </div>
    )
}

export {Cardund}