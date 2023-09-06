import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card( props) {
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.item.location == "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className = "card">
            {badgeText && <div className = "card--badge">{badgeText}</div>}
            <img src = {"../images/" + props.item.coverImg} className = "card--photo"></img>
            <div className = "card--review">
                <img src = "../images/red-star.png" className = "card--review_star"></img>
                <p className = "card--review_text"> {props.item.stats.rating} <span> ({props.item.stats.reviewCount}) · {props.item.location}</span></p>
            </div>
            <p className = "card--description">{props.item.title}</p>
            <p className = "card--price"><span>From {props.item.price}$ /</span>person</p>


        </div>
    )
}