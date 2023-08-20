// Spend a minute memorizing the line below
//Re-write the line of code as best as you can from the memory
// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))

//Suprise! Now you have to re-write the line of code again, this time let's see
// if you can figure it out how to render a <ul> + 2*<li> inside of it
// ReactDOM.render(<ul>
//     <li>Black</li> 
//     <li>White</li> 
//     <li>Yellow</li>
//     </ul>, document.getElementById("root"))

// const h1 = document.createElement("h1")
// h1.textContent = "Hello, world!"
// h1.className = "header"
// console.log(h1)
//<h1 className = "header">


//JSX

// const page = (
//     <div>
//         <h1 className = "header">This is JSX</h1>
//         <p>This is a paragraph!</p>
//     </div>
// )

// console.log(page)

const page = (
    <nav>
        <h1> Archer in the wood</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
    
ReactDOM.render(page , document.getElementById("root"))

