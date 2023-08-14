import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </>
  )
}

export default App
