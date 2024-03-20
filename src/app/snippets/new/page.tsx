 'use client'

 import {useFormState} from 'react-dom'; 
 import * as actions from '@/actions';


const SnippetCreatePage = () => {

const [formState,action] = useFormState(actions.createSnippet,{message:''})


  return (
    <>
  
      <form action={action}>
        <h3 className="font-bold text-green-700 text-center text-3xl my-8">Create Snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label htmlFor="title" className="w-12">Title</label>
            <input type="text" id='title' name='title' className="p-2 w-full border rounded" />
          </div>
          <div className="flex gap-4">
            <label htmlFor="code" className="w-12">Code</label>
            <textarea  id='code' name='code' className="p-2 w-full border rounded" />
          </div>

            {
              formState.message ? (<p className='text-red-500 font-bold '>{formState.message}</p>): ''
            }
       
          <button className=" rounded p-2 duration-300 font-bold hover:bg-green-800 bg-green-600 text-white px-2 py-4" type='submit'>Save</button>
        </div>
      </form>
    </>
  )
}

export default SnippetCreatePage