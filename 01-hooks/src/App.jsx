import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  function addValue() {
    setCounter(counter + 1)
  }

  {/*
    function addValue() {
    // setCounter = (counter + 1)
    setCounter((prevCounter) => {
      return prevCounter + 1;
    })
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1) // this will update value of counter +4 for every click

  }  // setCounter also recieves a call back function if needed to perform multiple same tasks at once
  // because useState sends the updates in bulk batches which would treat (counter + 1) as a single task 
  // even if multiple times as above in comment.
  */}
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
  )
}


export default App
