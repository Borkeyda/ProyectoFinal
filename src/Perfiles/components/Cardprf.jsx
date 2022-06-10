import React from 'react'
import "../styles/Cardprf.css"

function Cardprf({img, cargo, name}) {
    return (
        <div className='cards-prf'>
            <div className='informacion-prf'>
                <img src={img} alt="Foto empleado" />
                <span>{cargo} </span>
                <hr/>
                <span>{name} </span>
            </div>
        </div>
    )
}

export {Cardprf}