import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import Header from '../../Layout/Header/Header'
import { Card } from '../../UI/Card/Card'
import './Cards.css'
import { InfoCards } from '../../../Info'

export function Cards() {
    return (
        <>
            <Header/>
            <div className="center_cards">
                {
                    InfoCards.map(item => (
                        <Card props={item}/>
                    ))
                }
            </div>
            <Footer/> 
        </>
    )
}
