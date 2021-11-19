import React from 'react'
import './Logo.css'

export function Logo(props) {
    const {url} = props
    return (
        
        <div className="conatiner_image_logo">
            <img src={url} alt="" />
        </div>
         
        
    )
}
