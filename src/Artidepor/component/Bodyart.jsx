import React from 'react'
import "../styles/Bodyart.css"
import { Cardart } from './Cardart'
import imart1 from "../images/Art1.webp"
import imart2 from "../images/Art2.webp"
import imart3 from "../images/Art3.webp"
import imart4 from "../images/Art4.webp"
import imart5 from "../images/NAIK28.jpg"
import imart6 from "../images/NAIK29.jpg"

const cards = [
    {
        id:"1",
        img: imart1,
        name: "Canilleras Puma",
        precio: "60 bs",
    },
    {
        id:"2",
        img: imart2,
        name: "Reloj Puma",
        precio: "180 bs",
    },
    {
        id:"3",
        img: imart3,
        name: "Pelota Puma santander",
        precio: "270 bs",
    },
    {
        id:"4",
        img: imart4,
        name: "Tomatodo Puma",
        precio: "90 bs",
    },
    {
        id:"5",
        img: imart5,
        name: "Canilleras azul N",
        precio: "80 bs",
    },
    {
        id:"6",
        img: imart6,
        name: "Canilleras blancas N",
        precio: "130 bs",
    }
]

function Bodyart(props) {
    return (
        <div className='cont-total-articulos'> 
            {
                cards.map(card => (
                    <Cardart img={card.img} name={card.name} precio={card.precio} />
                ))
            }
        </div>
    )
}

export {Bodyart}