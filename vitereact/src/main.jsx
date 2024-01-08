import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
const AnotherElement = React.createElement(
  'a',
  {href:'http://google.com', target:'_blank'},
  'Click here to visit google'
)
AnotherElement