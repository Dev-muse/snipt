'use client';

interface errorPageProps{
    error: Error,
    reset : ()=>void
}

const ErrorPage = ({error,reset}:errorPageProps) => {
  return (
    <div>{error.message}</div>
  )
}

export default ErrorPage