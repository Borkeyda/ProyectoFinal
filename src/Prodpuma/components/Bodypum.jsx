import React from 'react'
import "../styles/Bodypum.css"
import { Cardpum } from './Cardpum'
import impum1 from "../images/Tennis1.webp"
import impum2 from "../images/Tennis2.webp"
import impum3 from "../images/Tennis3.webp"
import impum4 from "../images/Tennis4.webp"
import impum5 from "../images/Tennis5.webp"
import impum6 from "../images/Tennis6.webp"
import impum7 from "../images/Tennis7.webp"
import impum8 from "../images/Tennis8.webp"
import impum9 from "../images/Tennis9.webp"
import impum10 from "../images/Tennis10.webp"

const cards = [
    {
        id:"1",
        img: impum1,
        name: "Tennis blanco/azul",
        precio: "180 bs",
    },
    {
        id:"2",
        img: impum2,
        name: "Tennis arcoiris",
        precio: "210 bs",
    },
    {
        id:"3",
        img: impum3,
        name: "Sandalias negro",
        precio: "140 bs",
    },
    {
        id:"4",
        img: impum4,
        name: "Tennis azul clasic",
        precio: "180 bs",
    },
    {
        id:"5",
        img: impum5,
        name: "Tennis negro",
        precio: "190 bs",
    },
    {
        id:"6",
        img: impum6,
        name: "Tennis negro clasic",
        precio: "100 bs",
    },
    {
        id:"7",
        img: impum7,
        name: "Sandalais negro",
        precio: "115 bs",
    },
    {
        id:"8",
        img: impum8,
        name: "Tennis Borus",
        precio: "410 bs",
    },
    {
        id:"9",
        img: impum9,
        name: "Tennis Dealy",
        precio: "345 bs",
    },
    {
        id:"10",
        img: impum10,
        name: "Sandalias negro",
        precio: "250 bs",
    }
]

function Bodypum(props) {
    return (
        <div className='cont-total-puma'> 
            {
                cards.map(card => (
                    <Cardpum img={card.img} name={card.name} precio={card.precio} />
                ))
            }
        </div>
    )
}

export {Bodypum}