import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"Hitesh",
    age:20
  }
  let Arr = [1,23,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 
      rounded-2xl'>Hello Tailwind</h1>
      <Card username="Amit "  />
      <Card  />
      
        
    </>
  )
}

export default App
