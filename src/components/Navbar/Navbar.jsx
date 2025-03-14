import React from 'react'
import {Sun, Moon,Download} from 'lucide-react'

const Navbar = ({darkMode,toggleDarkMode,downloadCode}) => {
  return (
    <nav className={`flex justify-between items-center p-2 ${darkMode ? "bg-gray-800 text-white ":"bg-gray-200 text-gray-800"}`}>
        <h1 className='text-lg font-bold'>CodeOn<span className='text-orange-600'>{"<>"}</span></h1>
        <div className='flex items-center gap-4'>
            <button className='bg-gray-700 p-2 rounded-full text-white' onClick={toggleDarkMode}>
                {darkMode ? <Sun size={24}/> : <Moon size={24}/>}
            </button>
            <button className='flex items-center gap-2 bg-gray-700 p-2 rounded-lg text-white' onClick={downloadCode}>
                Download<Download size={24}/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar