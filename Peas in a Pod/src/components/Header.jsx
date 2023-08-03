
import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./public/peas.png" 
                className="header--image"
            />
            <h2 className="header--title">Peas in a Pod</h2>
            <img src="./public/Sign-in.png"
                 className="signin--image"/>
            <h4 className="header--project">Sign-In</h4>
        </header>
    )
}