import React from 'react'
import Card from '../../UI/Card/Card'
import { Info } from '../../UI/Info/Info'
import './Main.css'
import Image from '../../../assets/images/card.jpg'

export function Main() {
    return (
        <main>
            <div className="center_main">
                <Info />
                <section className="container_cards">
                    <Card image={Image} title={"Card"} />
                    <Card image={"https://i.ytimg.com/vi/DgB7Mn6hq8U/maxresdefault.jpg"} title={"Card"} />
                    <Card image={"https://wallpapercave.com/wp/wp8422895.jpg"} title={"Card"} />
                    <Card image={"https://c4.wallpaperflare.com/wallpaper/908/34/383/lofi-digital-anthro-hd-wallpaper-thumb.jpg"} title={"Card"} />
                </section>

            </div>
        </main>
    )
}
