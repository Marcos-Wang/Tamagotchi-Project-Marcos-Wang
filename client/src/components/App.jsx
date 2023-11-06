import { useState } from 'react'
import danuIdle from '../assets/DanuIdle.png'
import '../styles/App.css'

import Head from './Head.jsx'
// import View from './View.jsx'
// import Text from './Text.jsx'
// import Buttons from './Buttons.jsx'
import Modal from './Modal.jsx'
import Nav from './Nav.jsx'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={danuIdle} className="logo react" alt="React logo" />
        </a>
      </div>
      <Head />
      <Nav />
      <Modal />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
