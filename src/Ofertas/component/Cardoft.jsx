import React from 'react'
import "../styles/Cardoft.css"

function Cardoft({img, name, precio, ofert}) {
    return (
        <div className='cards-oft'>
            <div className='imagenes-oft'>
                <img src={img} alt="Imagen producto ofertado" />
            </div>
            <div className='informacion-oft'>
                <span>{name} </span>
                <span>{precio} </span>
            </div>
            <span className='oferta'> {ofert} </span>
        </div>
    )
}

export {Cardoft}