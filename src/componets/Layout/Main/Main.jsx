import React from 'react'
import { Card } from '../../UI/Card/Card'
import { Info } from '../../UI/Info/Info'
import './Main.css'
import Image from '../../../assets/images/card.jpg'
import { InfoCards } from '../../../Info'


export function Main() {
    return (
        <main>
            <div className="center_main">
                <Info />
                <section className="container_cards">
                    <Card props={InfoCards[2]} />
                </section>

            </div>
        </main>
    )
}
