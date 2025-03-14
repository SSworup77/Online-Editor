import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import CodeEditor from './components/CodeEditor/CodeEditor'

function App() {
  const [htmlCode, setHtmlCode] = useState("<h1>Namaste World</h1>")
  const[darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className='grid grid-cols-3'>
      <CodeEditor language="HTML" darkMode={darkMode}/>
      <CodeEditor language="CSS" darkMode={darkMode}/>
      <CodeEditor language="JavaScript" darkMode={darkMode}/>
      </div>
    </div>
  )
}

export default App
