import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lab1_App from './lab1app';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lab1_App />
  </StrictMode>,
)
