'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [createdUser, setCreatedUser] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setCreatedUser(false);
    setError(false);
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      setCreatedUser(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <section className="mt-8">
      <h1 className="mb-4 text-center text-primary text-4xl">Register</h1>
      {createdUser && (
        <div className="text-center my-4">
          User Created. <br /> Now you {''}
          <Link className="underline" href={'/login'}>
            login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="text-center my-4">
          An error has occurred. <br /> Please try again later
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          disabled={creatingUser}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button
          type="button"
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="flex gap-4 justify-center"
        >
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login with google
        </button>
        <div className="my-4 text-center text-gray-500">
          Existing account? {''}
          <Link className="underline" href={'/login'}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
