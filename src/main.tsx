import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Home from './sites/Home'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)