"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleAuth = (e) => {
    e.preventDefault();
    // No backend, just redirect to profile
    router.push('/profile');
  };

  return (
    <div className="flex text-gray-800 items-center min-h-screen bg-gray-100 justify-center px-2">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </h2>
        <form onSubmit={handleAuth} className="space-y-4">
          {isSignup && (
            <input
              type="text"
              required
              placeholder="Name"
              className="w-full px-4 py-2 border rounded"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full cursor-pointer bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-red-500 cursor-pointer hover:underline"
            onClick={() => setIsSignup(!isSignup)}
            type="button"
          >
            {isSignup ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}
