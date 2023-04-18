import React from 'react'

function Contact() {
    const getNumber = () => {
        console.log(9422225555) 
    }
  return (
    <div>
        <h2>This is contact page</h2>
        <button onClick={getNumber}>Mobile Number</button>
    </div>
  )
}

export default Contact