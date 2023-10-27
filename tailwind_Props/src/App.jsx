import { useState } from 'react'
import './App.css'
import Card from "./components/card"

function App() {
  const [count, setCount] = useState(0)
  const myObj={
    username:'Jack',
    text:"Helo i am jack"
  }
  return (
    <>
        <Card username="user101" text="HEllo world" obj={myObj}/>
        <Card/>
    </>
  )
}


export default App
