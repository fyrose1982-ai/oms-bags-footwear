import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
const root = document.getElementById('root')
root.hasChildNodes() ? hydrateRoot(root, <App />) : createRoot(root).render(<App />)
