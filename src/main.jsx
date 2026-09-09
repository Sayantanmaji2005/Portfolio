import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './print.css'
import App from './App.jsx'

// Apply dark mode by default (user can toggle via the sun/moon button)
document.documentElement.classList.add('dark');
document.documentElement.style.colorScheme = 'dark';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
