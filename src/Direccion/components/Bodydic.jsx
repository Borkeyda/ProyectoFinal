import React from 'react'
import "../styles/Bodydic.css"
import dic from "../images/ubisuchas.jpeg"

function Bodydic() {
    return (
        <div className='cont-direc'>
            <h2>Calle Chichas esquina Capitan Ravelo</h2>
            <h2>A dos cuadras de la Plaza Isabela Catolica, ex "Katanas" #169</h2>
            <img src={dic} alt="Ubicacion tienda" />
        </div>
    )
}

export {Bodydic}