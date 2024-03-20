'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';

export const editSnippet = async (id:number , code:string,title:string)=>{
     await db.snippet.update({
        // what record to update
        where:{id},
        // what new data
        data:{
            code,
            title
        }

     })
     redirect(`/snippets/${id}`)
}

export const deleteSnippet = async(id:number)=>{
    await db.snippet.delete({
        where:{id}
    })
    redirect('/')
}

export async function createSnippet(
    formState:{message:string},formData:FormData
    ){


    try{
    

    // get form inputs and validate
    const title = formData.get('title') ;
    const code = formData.get('code')  ;

    if(typeof title !== 'string' || title.length<3){
        return {message:'Title must be longer'}
    }

    if(typeof code !== 'string' || code.length<10){
        return {message:'Code must be longer'}
    }

    // new record in database 

   await db.snippet.create(
      {
      data:{
        title,
        code,
      },
      }
    )
 
    }catch(error:unknown){
    // if error is instance of Error class
    if(error instanceof Error){
        return {message: error.message}
    }else{
        return {
            message : 'something went wrong..'
        }
    }

   }

    // redirect to homepage after submit 
    redirect('/')
}