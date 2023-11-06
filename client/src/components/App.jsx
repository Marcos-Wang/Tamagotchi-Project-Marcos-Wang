import { useState } from 'react'
import danuIdle from '../assets/DanuIdle.png'
import '../styles/App.css'

import Header from './Header.jsx'
// import View from './View.jsx'
// import Text from './Text.jsx'
// import Buttons from './Buttons.jsx'
// import Modal from './Modal.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={danuIdle} className="logo react" alt="React logo" />
        </a>
      </div>
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
