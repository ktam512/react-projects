import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
    const cardElements = data.map(data => {
        return (
        <Card 
        title = {data.title}
        price = {data.price}
        img = {data.coverImg}
        rating = {data.stats.rating}
        reviewCount = {data.stats.reviewCount}
        location = {data.location}
        />
        ) 
    })
    return (
        <div>
            <Navbar/>
            <Hero/>
            {cardElements}
        </div>
    )
}