import React from 'react'
import "../styles/Filas.css"
import im1 from "../images/Productos.png"
import im2 from "../images/Pofertas.png"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Adidas } from '../../Prodadidas/components/Adidas'
import { Ofertas } from '../../Ofertas/component/Ofertas'

function Filauno() {
    return (
        <BrowserRouter>
            <div className='cont-filauno'>
                <div className='carduno'>
                    <NavLink to='Productos'>
                        <img src={im1} alt="Productos" />
                    </NavLink>
                </div>
                <div className='carddos'>
                    <NavLink to='Ofertas'>
                        <img src={im2} alt="Productos en oferta" />
                    </NavLink>
                </div>
            </div>
            <Routes>
                <Route path='Productos' element={ <Adidas/> } />
                <Route path='Ofertas' element={ <Ofertas/> } /> 
            </Routes>
        </BrowserRouter>
    )
}

export {Filauno}