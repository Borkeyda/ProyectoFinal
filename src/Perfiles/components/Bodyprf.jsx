import React from 'react'
import "../styles/Bodyprf.css"
import { Cardprf } from './Cardprf'
import imagen1 from "../images/ali.jpg"
import imagen2 from "../images/cardi.jpg"
import imagen3 from "../images/huasco.jpg"
import imagen4 from "../images/laime.jpg"
import imagen5 from "../images/paredes.jpg"
import imagen6 from "../images/reyes.jpg"
import imagen7 from "../images/sugeno.jpg"
import imagen8 from "../images/tinini.jpg"
import imagen9 from "../images/boris.jpg"

const cards = [
    {
        id:"1",
        img: imagen1,
        cargo: "Promotor 1",
        name: "ALI NOGALES CESAR ANTONIO"
    },
    {
        id:"2",
        img: imagen2,
        cargo: "Promotor 2",
        name: "CARDOZO MORALES IGNACIO JAVIER"
    },
    {
        id:"3",
        img: imagen3,
        cargo: "Promotor 3",
        name: "HUASCO ZUÑAGUA KEVIN ALVARO"
    },
    {
        id:"4",
        img: imagen4,
        cargo: "Promotor 4",
        name: "LAIME CUAQUIRA JHEYMI CRISTOFER"
    },
    {
        id:"5",
        img: imagen5,
        cargo: "Promotor 5",
        name: "PAREDES MATTOS PABLO MAURICIO"
    },
    {
        id:"6",
        img: imagen6,
        cargo: "Promotor 6",
        name: "REYES GUILLEN ALEJANDRO JAVIER"
    },
    {
        id:"7",
        img: imagen7,
        cargo: "Promotor 7",
        name: "MONTAÑO SUGENO ALEJANDRO CARLOS"
    },
    {
        id:"8",
        img: imagen8,
        cargo: "Promotor 8",
        name: "TIÑINI COAQUIRA ISRAEL ROBERTO"
    },
    {
        id:"9",
        img: imagen9,
        cargo: "Promotor 9",
        name: "ENCINA CATACORA BORIS BAIRON"
    }
]

function Bodyprf(props) {
    return (
        <div className='cont-total-prf'> 
            {
                cards.map(card => (
                    <Cardprf img={card.img} cargo={card.cargo} name={card.name} />
                ))
            }
        </div>
    )
}

export {Bodyprf}