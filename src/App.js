import React, { useState } from 'react'
import './App.css'

const App = () => {
  const[a, b] = useState(5)

  let  AddValue = ()=>{
    b(a+1)
  }

  let  DecValue = ()=>{
    b(a-1)
  }

  return (
    <> 
      <h1>My React App</h1>
      <h2>Counter value : {a} </h2>
      <button onClick={AddValue}>Increase</button>
      <button onClick={DecValue}>Decrease</button>
    </>
  )
}

export default App