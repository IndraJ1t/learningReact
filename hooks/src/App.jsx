import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  function addValue() {
    setCounter(counter + 1)
  }

  function removeValue() {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Let's start</h1>
      <button onClick={addValue} disabled={counter >= 20}>Add value {counter}</button>
      <br />
      <button onClick={removeValue} disabled={0 == counter}>Remove vlaue {counter}</button>

    </>
  );
}
export default App
