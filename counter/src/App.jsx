import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter, setCounter] = useState(0)

const addValue = () => {
  
  setCounter(counter + 1)
}

const removeValue = () => {
  setCounter(counter - 1)
}

  return (
    <>

    <h1>Counter Project</h1>
    <h2>Counter Value</h2>
    
    <button onClick={addValue}> AddValue {counter}</button>
    <br />
    <button onClick={removeValue}> RemoveValue {counter}</button>
    </>
  )
} 


export default App
