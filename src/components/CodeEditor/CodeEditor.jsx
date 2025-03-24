import { bbedit } from '@uiw/codemirror-theme-bbedit';
import CodeMirror from "@uiw/react-codemirror"
import {andromeda} from '@uiw/codemirror-theme-andromeda';

import React from 'react'

const CodeEditor = ({language,code, setCode,darkMode,extension}) => {
  return (
    <div className='border border-gray-600'>
        <h2 className='text-center bg-gray-400 font-mono'>{language}</h2>
        <CodeMirror 
        value={code}
        height='220px' 
        extensions={[extension]}
        theme={darkMode ? andromeda : bbedit}
        onChange={(value)=>setCode(value)}
        className='cm-editor text-sm focus:outline-none'
        ></CodeMirror> 
    </div>
  )
}

export default CodeEditor