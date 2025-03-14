import { bbedit } from '@uiw/codemirror-theme-bbedit';
import CodeMirror from "@uiw/react-codemirror"
import {andromeda} from '@uiw/codemirror-theme-andromeda';

import React from 'react'

const CodeEditor = ({language,darkMode}) => {
  return (
    <div className='border border-gray-500'>
        <h2 className='text-center bg-gray-300'>{language}</h2>
        <CodeMirror 
        language={language}
        height='220px' 
        theme={darkMode ? andromeda : bbedit}
        className='cm-editor text-sm focus:outline-none'
        ></CodeMirror> 
    </div>
  )
}

export default CodeEditor