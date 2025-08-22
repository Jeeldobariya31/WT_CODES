import { useState } from 'react'
import A from './A'
import './App.css'

function App() {
  const [name, setName] = useState("Developer")

  return (
    <div className="app-container">
      <h1>Drilling Demo...</h1>
      <A name={name} setName={setName} />
    </div>
  )
}

export default App
