import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    setCount(count + 1);
  }
  const removeValue = () => {
    setCount(count - 1);
  }
  return (
    <>
      <h1> React With Vite</h1>
      <h2>Counter Value: {count}</h2>
      <br />
      <div>
        <button className="button-bg" onClick={addValue}>Add Value </button>
        <button className="button-bg1" onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
