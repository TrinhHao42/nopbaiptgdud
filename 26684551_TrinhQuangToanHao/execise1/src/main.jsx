import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './exercise-3-func/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
