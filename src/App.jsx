import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <div className="App__box">
        <Navbar />
        <Card />
        
      </div>
    </div>
  )
}

export default App
