import React from 'react'
import './CardStyles.css'

export const Card = ( {props} ) => {
    const {id, image, title} = props
    return (
        <div key={id} className="card">
            <img src={image} className="image" alt="" />
            <p className="name">{title}</p>
        </div>
    )
}
