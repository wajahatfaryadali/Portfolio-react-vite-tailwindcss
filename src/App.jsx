import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
      <Work />
      <Projects />
    </>
  )
}

export default App
