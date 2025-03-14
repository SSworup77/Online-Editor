import { useEffect, useState } from 'react'
import './App.css'
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import Navbar from './components/Navbar/Navbar'
import CodeEditor from './components/CodeEditor/CodeEditor'
import LivePreview from './components/LivePreview/LivePreview'

function App() {
  const [htmlCode, setHtmlCode] = useState("<h1>Namaste World</h1>")
  const [cssCode, setCssCode] = useState("h1{color:blue;}")
  const [jsCode, setJsCode] = useState("//Write javascript code here")
  const [darkMode, setDarkMode] = useState(()=>JSON.parse(localStorage.getItem('darkMode')) || false)
  const [srcDoc, setSrcDoc] = useState('')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  useEffect(()=>
    localStorage.setItem('darkMode',JSON.stringify(darkMode))
  ,[darkMode])
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
        <style>${cssCode}</style>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
      </html>
      `)
    },400);
    return ()=>clearTimeout(timeout);
  },[htmlCode,cssCode,jsCode])

  const downloadCode=()=>{
    const fullCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CodeOn Downloads</title>
      <style>${cssCode}</style>
    </head>
    <body>
      ${htmlCode}
      <script>${jsCode}</script>
    </body>
    </html>
    `
    const blob=new Blob([fullCode],{type:'text/html'})
    const url = URL.createObjectURL(blob)
    const link=document.createElement("a")
    link.href=url
    link.download="index.html"
    link.click()
    URL.revokeObjectURL(url)
  }


  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-800" : "bg-gray-300 "}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} downloadCode={downloadCode}/>
      <div className='grid grid-cols-3 gap-1 p-1'>
      <CodeEditor language="HTML" code={htmlCode} setCode={setHtmlCode} extension={html()} darkMode={darkMode}/>
      <CodeEditor language="CSS" code={cssCode} setCode={setCssCode} extension={css()} darkMode={darkMode}/>
      <CodeEditor language="JavaScript" code={jsCode} setCode={setJsCode} extension={javascript()} darkMode={darkMode}/>
      </div>
      <LivePreview srcDoc={srcDoc}/>
    </div>
  )
}

export default App
