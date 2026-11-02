import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode ajuda a encontrar problemas durante o desenvolvimento.
  <StrictMode>
    {/* BrowserRouter permite usar rotas e Links dentro do App. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)