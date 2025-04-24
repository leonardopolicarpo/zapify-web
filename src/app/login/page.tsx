'use client'

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (name: string, email: string) => {
    login({ name, email });
    router.push('/');
  }

  return (
    <main className='p-8'>
      <h1 className='text-xl mb-4'>Login</h1>
      <button
        type='button'
        onClick={() => handleLogin('Leo', 'teste@teste.com')}
        className='bg-blue-500 text-white px-4 py-2 rounded'>
        Entrar
      </button>
    </main>
  )
}