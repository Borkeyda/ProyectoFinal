import React from 'react'
import "../styles/Filas.css"
import im4 from "../images/Promotes.png"
import im5 from "../images/Ubicacion.png"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Direccion } from '../../Direccion/components/Direccion'
import { Perfiles } from '../../Perfiles/components/Perfiles'

function Filatres() {
    return (
        <BrowserRouter>
            <div className='cont-filatres'>
                <div className='cardcua'>
                    <NavLink to='Perfiles'>
                        <img src={im4} alt="Promotores" />
                    </NavLink>
                </div>
                <div className='cardcin'>
                    <NavLink to='Ubicacion'>
                        <img src={im5} alt="Ubicacion" />
                    </NavLink>
                </div>
            </div>
            <Routes>
                <Route path='Perfiles' element={ <Perfiles/> } />
                <Route path='Ubicacion' element={ <Direccion/> } />
            </Routes>
        </BrowserRouter>
    )
}

export {Filatres}