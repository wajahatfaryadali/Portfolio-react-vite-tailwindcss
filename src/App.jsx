import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
      <Work />
      <Projects />
      <Contact />
      <ToastContainer />
    </>
  )
}

export default App
