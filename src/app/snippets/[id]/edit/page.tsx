import { db } from '@/db';
import { notFound } from 'next/navigation';
import SnippetEditForm from '@/components/SnippetEditForm';

interface SnippetEditProps{
    params: {
        id : string
    }
}

const SnippetEditPage = async ({params}:SnippetEditProps) => {
    const id = Number(params.id);

    const snippet = await db.snippet.findFirst({
        where : {id}
    });

    if(!snippet){
        return notFound()
    }

  return (
    <div>
        <SnippetEditForm snippet={snippet} />
    </div>
  )
}

export default SnippetEditPage