import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Main(props) {
    const checkEvent = () => {
        console.log("The button is clicked")
    }
    const [text, setText] = useState({anyText:' '})
    useEffect( () => {
        document.title = `You are typing this text`
    })
  return (
    <>
        <div>
            <h1>This is the Main page</h1>
            <Link to="Contact">Click here to view Contact</Link>
            <h2>This is the first component by {props.name}</h2>
            {props.Children}
        </div>
        <div>
            <button onClick={checkEvent}>Click me</button>
            <input type= "text" value={text.anyText} onChange = {e => setText({...text,anyText: e.target.value})}></input>
            <h2>You are typing - {text.anyText}</h2>
        </div>
    </>
  )
}

export default Main