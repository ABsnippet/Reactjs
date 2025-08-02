import { useState } from 'react'

import './App.css'

function App() {

  const [counter,setCounter]=useState(5)

  // let counter = 5
 
  const addValue=()=>{
  
    
    if (counter < 20) {
    setCounter(counter + 1);
    setCounter(prevcounter=> prevcounter+1)
    setCounter(prevcounter=> prevcounter+1)
    setCounter(prevcounter=> prevcounter+1)
    setCounter(prevcounter=> prevcounter+1)
  }
    
  }
  const subValue = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  }
};


  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick = {subValue}
      >Remove  Value</button>

      <footer> Value : {counter}</footer>
    </>
  )
}

export default App
