/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/
import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img className = "nav--icon"src = "images/react.svg"/>
            <h2 className= "nav--icon_text">ReactFacts</h2>
            <h3 className= "nav--title">React Course - Project 1</h3>
        </nav>
    )
}