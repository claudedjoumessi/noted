import React from 'react'

const Editor = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4 bg-amber-200/0 p-12'>
        <h1 className='text-4xl font-bold'>
            Welcome to noted
        </h1>
        <p className=''>
            Your AI-powered note-taking application.
            <br/>
            Start by creating a new note or opening an existing one.
        </p>
    </div>
  )
}

export default Editor