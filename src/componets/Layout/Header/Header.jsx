import React from 'react'
import { Logo } from '../../UI/Logo/Logo'
import { NavBar } from '../../UI/NavBar/NavBar'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="center_header">
                <div>
                    <Logo url={"https://i.ytimg.com/vi/DgB7Mn6hq8U/maxresdefault.jpg"} />
                </div>
                <NavBar />
            </div>
        </header>
    )
}
