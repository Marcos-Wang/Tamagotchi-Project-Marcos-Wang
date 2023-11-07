import { useState } from 'react'

import '../styles/App.css'

import Head from './Head.jsx'
import Buttons from './Buttons.jsx'
import Nav from './Nav.jsx'
import Clock from './Clock.jsx'

function App() {

  
  

  return (
    <>
      
      <Head />
      <Clock/>
      <Nav />
      <Buttons />
    </>
  )
}

export default App
