import React from 'react'
import "../styles/Video.css"
import vid from "../video/suchasvid.mp4"

function Video() {
    return (
        <div className='body-video'>
            <video muted autoPlay loop >
                <source src={vid} type="video/mp4" />
            </video>
        </div>
    )
}

export {Video}