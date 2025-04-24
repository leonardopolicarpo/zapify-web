'use client'

import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();


  return (
    <main className='p-8'>
      <h1 className='text-xl mb-4'>Cadastrar</h1>
      <button
        type='button'
        onClick={() => router.push('/')}
        className='bg-blue-500 text-white px-4 py-2 rounded'>
        Inicio
      </button>
    </main>
  )
}