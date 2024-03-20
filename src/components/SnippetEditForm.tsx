'use client';

import Editor from '@monaco-editor/react';
import type { Snippet } from '@prisma/client'
import { useState } from 'react';
import * as actions from '@/actions';

interface SnippetEditFormProps{
    snippet:Snippet
}

const SnippetEditForm = ({snippet}:SnippetEditFormProps) => {

     

    const [code, setCode] = useState(snippet.code)
    const [title, setTitle] = useState(snippet.title)

    const handleTitleChange = (event:any)=>{
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    const handleEditorChange=(value:string='')=>{
        setCode(value)
    }

    const editSnippetAction= actions.editSnippet.bind(null, snippet.id,code,title);

  return (
    <div className='space-y-8'>
        <h1 className="text-6xl py-4 font-bold text-center text-green-600 ">Editing: {snippet.title}</h1>
        <label htmlFor="title" className='placeholder:italic placeholder:font-extralight text-lg font-semibold'>
            Title:
            <input type="text" name='title' placeholder='Enter code title' value={title} onChange={handleTitleChange} 
            className='border ml-2 px-4 border-green-400'/>
        </label>
        <Editor 
        height={'40vh'}
        theme='vs-dark'
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{
            minimap:{enabled:false}
        }}
        onChange={handleEditorChange}
        />
        <form action={editSnippetAction}>
            <button className='px-6 py-4 rounded-full bg-green-600
             text-white text-lg font-semibold hover:bg-green-800 transition-all duration-300' type='submit'>Save code</button>
        </form>
    </div>
  )
}

export default SnippetEditForm