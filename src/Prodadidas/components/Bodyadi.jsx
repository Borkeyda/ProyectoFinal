import React from 'react'
import "../styles/Bodyadi.css"
import { Cardadi } from './Cardadi'
import imadi1 from "../images/chompuno.jpg"
import imadi2 from "../images/chompdos.jpg"
import imadi3 from "../images/mochuno.jpg"
import imadi4 from "../images/mochdos.jpg"
import imadi5 from "../images/mochtres.jpg"
import imadi6 from "../images/polerauno.jpg"
import imadi7 from "../images/shortsuno.jpg"
import imadi8 from "../images/tennisuno.png"
import imadi9 from "../images/tennisdos.png"
import imadi10 from "../images/tennistres.png"

const cards = [
    {
        id:"1",
        img: imadi1,
        name: "Sudadera mujer",
        precio: "160 bs",
    },
    {
        id:"2",
        img: imadi2,
        name: "Chamarra varon",
        precio: "210 bs",
    },
    {
        id:"3",
        img: imadi3,
        name: "Mochila adidas",
        precio: "140 bs",
    },
    {
        id:"4",
        img: imadi4,
        name: "Cartera Adidas floral",
        precio: "180 bs",
    },
    {
        id:"5",
        img: imadi5,
        name: "Maletin adidas",
        precio: "190 bs",
    },
    {
        id:"6",
        img: imadi6,
        name: "Polera adidas azul",
        precio: "100 bs",
    },
    {
        id:"7",
        img: imadi7,
        name: "Bermuda Marron",
        precio: "115 bs",
    },
    {
        id:"8",
        img: imadi8,
        name: "Tennis",
        precio: "410 bs",
    },
    {
        id:"9",
        img: imadi9,
        name: "Tennis",
        precio: "345 bs",
    },
    {
        id:"10",
        img: imadi10,
        name: "Tennis",
        precio: "250 bs",
    }
]

function Bodyadi(props) {
    return (
        <div className='cont-total-adi'> 
            {
                cards.map(card => (
                    <Cardadi img={card.img} name={card.name} precio={card.precio} />
                ))
            }
        </div>
    )
}

export {Bodyadi}