
import {db} from '@/db';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import * as actions from '@/actions';

interface snippetProps{
    params : {
        id: string
    }

}

const SnippetShowPage = async ({params}:snippetProps) => {
  
    const snippet = await db.snippet.findFirst({
        where:{
            id: Number(params.id)
        }
    })

  if(!snippet) return notFound()

    const deleteSnippetAction = actions.deleteSnippet.bind(null,snippet.id)

  return (
    <div>
        <div className="flex m-4 items-center justify-between">
            <h1 className="text-2xl font-bold text-green-600">
                Snippet: {snippet.title}
            </h1>
            <div className=" flex gap-x-4">
                <Link href={`/snippets/${snippet.id}/edit`} className="px-4 py-2 rounded border text-lg hover:text-white hover:bg-amber-500 ">Edit</Link>

                <form action={deleteSnippetAction}>
                    <button className="px-4 py-2 rounded border text-lg hover:text-white hover:bg-red-500">Delete</button>
                </form>

            </div>
        </div>
   
        <pre className="p-4 text-black border border-green-600 rounded text-xl  bg-green-50  ">
            <code>{snippet?.code}</code>
        </pre>
    </div>
  )
}

export default SnippetShowPage