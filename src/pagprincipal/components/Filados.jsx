import React from 'react'
import "../styles/Filados.css"
import im3 from "../images/artidepo.jpg"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Articulos } from '../../Artidepor/component/Articulos'

function Filados() {
    return (
        <BrowserRouter>
            <div className='cont-filados'>
                <div className='cardtres'>
                    <NavLink to='Arti'>
                        <img src={im3} alt="Articulos deportivos" />
                    </NavLink>
                </div>
            </div>
            <Routes>
                <Route path='Arti' element={ <Articulos/> } /> 
            </Routes>
        </BrowserRouter>
    )
}

export {Filados}