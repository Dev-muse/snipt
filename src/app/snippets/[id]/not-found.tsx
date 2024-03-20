import Link from 'next/link'

const SnippetNotFound = (props:any) => {
    console.log(props)
  return (
    <div className='flex flex-col items-center justify-center p-12'>
        <h1 className="text-[10rem] text-green-600 text-center font-bold">
            404
        </h1>
        <p className="text-2xl font-bold">Error! : we couldn&apos;t find that snippet</p>

        <Link href='/' className="mt-8 text-2xl font-bold hover:underline hover:text-red-500">Back to home </Link>
    </div>

  )
}

export default SnippetNotFound