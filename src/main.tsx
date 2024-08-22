import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalStyle } from './styles/Style.modules.ts'
import { HashRouter  } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <HashRouter >
      <GlobalStyle />
      <App />
    </HashRouter >
  </React.StrictMode>

)
