import React from 'react'
import "../styles/Bodynik.css"
import { Cardnik } from './Cardnik'
import imnik1 from "../images/NAIK1.jpg"
import imnik2 from "../images/NAIK2.jpg"
import imnik3 from "../images/NAIK3.jpg"
import imnik4 from "../images/NAIK4.jpg"
import imnik5 from "../images/NAIK5.jpg"
import imnik6 from "../images/NAIK6.jpg"
import imnik7 from "../images/NAIK7.jpg"
import imnik8 from "../images/NAIK8.jpg"
import imnik9 from "../images/NAIK9.jpg"
import imnik10 from "../images/NAIK10.jpg"

const cards = [
    {
        id:"1",
        img: imnik1,
        name: "Buzo mujer",
        precio: "160 bs",
    },
    {
        id:"2",
        img: imnik2,
        name: "Tennis plomo",
        precio: "210 bs",
    },
    {
        id:"3",
        img: imnik3,
        name: "Tennis negro",
        precio: "140 bs",
    },
    {
        id:"4",
        img: imnik4,
        name: "Tennis cafes clasic",
        precio: "180 bs",
    },
    {
        id:"5",
        img: imnik5,
        name: "Tennis azul",
        precio: "190 bs",
    },
    {
        id:"6",
        img: imnik6,
        name: "Tennis special",
        precio: "100 bs",
    },
    {
        id:"7",
        img: imnik7,
        name: "Tennis azul/negro",
        precio: "115 bs",
    },
    {
        id:"8",
        img: imnik8,
        name: "Polera Chelsea",
        precio: "410 bs",
    },
    {
        id:"9",
        img: imnik9,
        name: "Buso Salmon",
        precio: "345 bs",
    },
    {
        id:"10",
        img: imnik10,
        name: "Tennis blancos",
        precio: "250 bs",
    }
]

function Bodynik(props) {
    return (
        <div className='cont-total-nik'> 
            {
                cards.map(card => (
                    <Cardnik img={card.img} name={card.name} precio={card.precio} />
                ))
            }
        </div>
    )
}

export {Bodynik}