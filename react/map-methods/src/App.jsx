import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArrayMap from './arra_map.jsx'
import CarList from './car.jsx'
import Students from './students.jsx'
import Faculties from './faculties.jsx'

function App() {
  

  return (
    <div className="container">
      <ArrayMap />
      <CarList />
      <Students />
      <Faculties />
    </div>
  )
}

export default App

