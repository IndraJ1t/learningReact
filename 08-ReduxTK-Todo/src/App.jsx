import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App({ }) {
  const [input, setInput] = useState('')

  return (
    <>
      <h1>React Redux Tool Kit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App