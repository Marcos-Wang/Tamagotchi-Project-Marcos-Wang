import { useState } from 'react'
import danuIdle from '../assets/DanuIdle.png'
import '../styles/App.css'

import Title from './Title.jsx'
// import Monitor from './Monitor.jsx'
// import Response from './Response.jsx'
// import Sidebar from './Sidebar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={danuIdle} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
