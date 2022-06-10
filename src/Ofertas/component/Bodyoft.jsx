import React from 'react'
import "../styles/Bodyoft.css"
import { Cardoft } from './Cardoft'
import imoft1 from "../images/NAIK17.jpg"
import imoft2 from "../images/NAIK18.jpg"
import imoft3 from "../images/Oferta1.jpg"
import imoft4 from "../images/Oferta2.jpg"
import imoft5 from "../images/Undof1.jpg"
import imoft6 from "../images/Undof2.jpg"

const cards = [
    {
        id:"1",
        img: imoft1,
        name: "Botines Nike blancos",
        precio: "160 bs",
        ofert: "20% descuento"
    },
    {
        id:"2",
        img: imoft2,
        name: "Botines Nike",
        precio: "210 bs",
        ofert: "10% descuento"
    },
    {
        id:"3",
        img: imoft3,
        name: "Sudadera Biadidas",
        precio: "140 bs",
        ofert: "30% descuento"
    },
    {
        id:"4",
        img: imoft4,
        name: "Conjunto de ropa",
        precio: "180 bs",
        ofert: "25% descuento"
    },
    {
        id:"5",
        img: imoft5,
        name: "Sudadera Arblack",
        precio: "190 bs",
        ofert: "15% descuento"
    },
    {
        id:"6",
        img: imoft6,
        name: "Tennis Specar",
        precio: "100 bs",
        ofert: "35% descuento"
    }
]

function Bodyoft(props) {
    return (
        <div className='cont-total-ofe'> 
            {
                cards.map(card => (
                    <Cardoft img={card.img} name={card.name} precio={card.precio} ofert={card.ofert} />
                ))
            }
        </div>
    )
}

export {Bodyoft}