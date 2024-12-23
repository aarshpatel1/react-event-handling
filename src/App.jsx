import { useState } from 'react'
import './App.css'

function App() {
  let [isHovered, setIsHovered] = useState(false)
  let [isClicked, setIsClicked] = useState(false)
  let [text, setText] = useState("")

  function handleHover() {
    setIsHovered(true)
  }

  function handleLeave() {
    setIsHovered(false)
  }

  function handleClick() {
    setIsClicked(!isClicked)
  }

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <>
      <h1 onMouseEnter={handleHover} className={isHovered ? "text-glow" : ""} onMouseLeave={handleLeave}>Events Handling in React JS</h1>
      <button onClick={handleClick} className={isClicked ? "change-bg" : ""}>Click Me and Resize</button >
      <form action="">
        <input type="text" name="name" onChange={handleChange} className="input" />
      </form>
      <p>{text}</p>
    </>
  )
}

export default App
