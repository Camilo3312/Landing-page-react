import React from 'react'
import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="center_footer">
                <div className="container_info">
                    <div>
                        <div className="logo">Logo</div>
                        <p className="paragraph_footer">Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                    <p className="info_footer paragraph_footer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur iusto incidunt labore doloremque non quidem commodi, esse itaque. Delectus.</p>
                </div>
                <div className="container_social">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">Whatsapp</a>
                </div>
            </div>
        </footer>
    )
}
