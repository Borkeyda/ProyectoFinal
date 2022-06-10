import React from 'react'
import "../styles/Login.css"
import log from "../images/login.jpg"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Pagprincipal } from '../../pagprincipal/components/Pagprincipal'

function Login() {
    return (
        <BrowserRouter>
            <div className='usuario-log'>
                <div className='cont-login'>
                    <div className='login-img'>
                        <img src={log} alt="Logo Tienda Deportiva Suchas" />
                    </div>
                    <div className='login info'>
                        <h2>Registrate para acceder a nuestra tienda</h2>
                        <hr/>
                        <div className='inputs'>
                            <input type="text" placeholder="Name" className="name"/>
                            <input type="email" placeholder='Email' className='email' />
                            <input type="password" placeholder="Password" className="pass"/>
                        </div>
                        <NavLink to='Login'>
                        <button>Login</button>
                        </NavLink>    
                        <p className="link">
                            <a href="a">Forgot password ?</a>  Or  <a href="a"> Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='Login' element={ <Pagprincipal/> } />
            </Routes>
        </BrowserRouter>
    )
}

export {Login}