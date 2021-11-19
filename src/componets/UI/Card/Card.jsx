import React from 'react'
import './CardStyles.css'

export default function Card(props) {
    const {image, title} = props
    return (
        <div className="card">
            <img src={image} className="image" alt="" />
            <p className="name">{title}</p>
        </div>
    )
}
