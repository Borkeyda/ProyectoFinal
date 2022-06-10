import React from 'react'
import "../styles/Bodyund.css"
import { Cardund } from './Cardund'
import imund1 from "../images/Under1.jpg"
import imund2 from "../images/Under2.jpg"
import imund3 from "../images/Under3.jpg"
import imund4 from "../images/Under4.jpg"
import imund5 from "../images/Under5.jpg"
import imund6 from "../images/Under6.jpg"
import imund7 from "../images/Under7.jpg"
import imund8 from "../images/Under8.jpg"
import imund9 from "../images/Under9.jpg"
import imund10 from "../images/Under10.jpg"

const cards = [
    {
        id:"1",
        img: imund1,
        name: "Polera ploma",
        precio: "160 bs",
    },
    {
        id:"2",
        img: imund2,
        name: "Gorra Under",
        precio: "210 bs",
    },
    {
        id:"3",
        img: imund3,
        name: "Tennis negro",
        precio: "140 bs",
    },
    {
        id:"4",
        img: imund4,
        name: "Tennis verde",
        precio: "180 bs",
    },
    {
        id:"5",
        img: imund5,
        name: "Tennis blancos",
        precio: "190 bs",
    },
    {
        id:"6",
        img: imund6,
        name: "Tennis special",
        precio: "100 bs",
    },
    {
        id:"7",
        img: imund7,
        name: "Tennis rosa cool",
        precio: "115 bs",
    },
    {
        id:"8",
        img: imund8,
        name: "Sudadera roja",
        precio: "410 bs",
    },
    {
        id:"9",
        img: imund9,
        name: "Polera UnderT",
        precio: "345 bs",
    },
    {
        id:"10",
        img: imund10,
        name: "Corto Under sup",
        precio: "250 bs",
    }
]

function Bodyund(props) {
    return (
        <div className='cont-total-und'> 
            {
                cards.map(card => (
                    <Cardund img={card.img} name={card.name} precio={card.precio} />
                ))
            }
        </div>
    )
}

export {Bodyund}