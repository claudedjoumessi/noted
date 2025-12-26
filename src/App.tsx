import React from 'react'
import CommandPalette from './components/CommandPalette'
import Editor from './components/Editor'

const App = () => {
  return (
    <div className='w-dvw h-dvh flex'>
      <CommandPalette />
      <Editor />
    </div>
  )
}

export default App