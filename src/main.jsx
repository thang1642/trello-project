import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvide } from '@mui/material/styles'
import theme from './theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvide theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvide>
  </React.StrictMode>
)
