import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const addValue = () => {
    setCount(count + 1);
  };

  const removeValue = () => {
    setCount(count - 1);
  };

  const myobj = {
    userName: "Suresh",
    age: 21
  };
  const arr = [1, 2, 3];
  return (
    <>
      <h1 className='bg-green-200 p-1 rounded-xl mb-4'>Tailwind with CSS</h1>
      <h2>Counter Value: {count}</h2>
      <br />
      <div>
        <button className="button-bg" onClick={addValue}>Add Value </button>
        <button className="button-bg1" onClick={removeValue}>Remove Value</button>
      </div>

      <Card userName="Suresh" btnText="click me" objp={myobj} />
      <Card userName="Vijay"  arrp={arr} />
    </>
  )
}

export default App
