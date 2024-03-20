import {db} from '@/db';
import Link from 'next/link';
 

 
export default async function Home() {

  const snippets = await db.snippet.findMany();
   
  const renderedSnippets = snippets.map(snippet=>{
  return (
    <Link
      href={`/snippets/${snippet.id}`}
      key={snippet.id} 
      className=" group flex justify-between items-center border p-4 
      hover:bg-green-600 transition-all duration-300">
        
    <span className='group-hover:text-white font-bold'>{snippet.title}</span>
    <span className='hover:underline group-hover:text-white group-hover:font-bold text-green-400'>View</span>
    </Link>
  )
})


  return (
     <main>
      <div className="flex items-center justify-between p-8 my-4">
        <h1 className='text-green-600 font-bold text-3xl text-center'>Code snippets</h1>
        <Link href='/snippets/new' className="border text-white bg-black font-bold text-lg px-4 py-2">Create</Link>
      </div>
      <div className='space-y-4 mt-8'>
        {renderedSnippets}
      </div>
     </main>
  );
}
