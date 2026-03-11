import { useState } from 'react'
import './App.css'
 
import Encabezado from './app/components/header'
import Hero from './app/components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Encabezado></Encabezado>

      <Hero></Hero>

    </>
  )
}

export default App
