import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Return from './components/01-Return/Return'
import Props from './components/02-Props/Props'
import States from './components/03-States/States'
import Events from './components/04-Events/Events'
import { AppProvider } from './components/05-Context-API/Context'

function App() {

  return (
    <main>
      <AppProvider>
      <Return/>
      <Props name="john" id={69}><h5>hello world</h5></Props>
      <States/>
      <Events/>
      </AppProvider>
    </main>
  )
}

export default App
