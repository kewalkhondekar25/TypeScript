import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Return from './components/01-Return/Return'
import Props from './components/02-Props/Props'

function App() {

  return (
    <main>
      <Return/>
      <Props name="john" id={69}/>
    </main>
  )
}

export default App
