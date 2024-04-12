import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function addValue() {
    count = count + 1
    setCount(count)
  }

  function removeValue(){
    count = count - 1
    setCount(count)
  }

  return (
    <>
     <h1>Chai aur Puneet</h1>
     <h2>Counter value : {count}</h2>
     <button onClick={addValue}>add value</button>

     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
