import React from 'react'

const LivePreview = ({srcDoc}) => {
  return (
    <div className='border border-gray-500 m-1'>
        <h2 className='text-center bg-gray-300'>Live Preview</h2>
        <iframe srcDoc={srcDoc} 
        frameborder="0" 
        sandbox='allow-scripts'
        className='w-full h-[300px] bg-white'/>

    </div>
  )
}

export default LivePreview