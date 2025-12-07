import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 style={{color:"blue"}}>hello world</h1> 
        <img src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt044c1a4105a3f5b2/6668d4dbf69e87e00bb8eb4a/RoseFacts-Hero2.jpeg?q=70&width=828&auto=webp"/>
        <div>  <button>submit</button></div>
      </div>
    </>
  )
}

export default App
