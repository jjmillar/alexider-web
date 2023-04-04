import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Estamos haciendo las cosas bien para usted... Sitio en construcción...</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          <p>Atte. Alexider González.</p>
        </button>
      </div>
    </div>
  )
}

export default App
