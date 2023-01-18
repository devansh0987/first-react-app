// 1) Import react and react Dom
import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import ExpenseItem from './components/ExpenseItem'

//2)Get a refrence to the div and id root.
const el = document.getElementById('root')


//3)Tell React to take control of that element

const root = ReactDom.createRoot(el)

//4)Create a component.

function App() {
    return( 
    <div>
        <h1>Hi there!</h1>
        <ExpenseItem />
    </div>
    );
}

//5)Show the component on the screen

root.render(<App />)