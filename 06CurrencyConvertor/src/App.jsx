import { useState } from 'react'

import './App.css'

function App() {

  const[count,setcount] = useState(0)
  return (
    <>
     <h1 className='text-3xl bg-orange-500'>Currency Convertor  App </h1>
    </>
  )
}

export default App
