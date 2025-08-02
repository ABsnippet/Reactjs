import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//     type:'a',
//     props :{
//         href :'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit Here</a>
// )


const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target : '_blank'},
  'click me to visit Google'
)


createRoot(document.getElementById('root'))
.render(

 <App/>

 
)
