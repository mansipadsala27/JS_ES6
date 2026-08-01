import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Mansi from "./mansi"

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Mansi/> */}

  </StrictMode>,
)
