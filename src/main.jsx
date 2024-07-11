import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import New from './New.jsx'
import "../styles/components/_settings..scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <New />
  </React.StrictMode>,
)
