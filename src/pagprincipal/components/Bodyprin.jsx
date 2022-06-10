import React from 'react'
import "../styles/Bodyprin.css"
import { Video } from './Video'
import { Cardsprin } from './Cardsprin'

function Bodyprin() {
    return (
        <div className='body-principal'>
            <Video/>
            <Cardsprin/>
        </div>
    )
}

export {Bodyprin}