'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Ensure the API URL is available
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
        setError("API URL is not configured. Please set NEXT_PUBLIC_API_URL environment variable.");
        setMessage(''); // Clear loading message
        return;
    }

    // Fetch data from the backend
    console.log(`${apiUrl}/message`);
    fetch(`${apiUrl}/message`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error("Failed to fetch message:", error);
        setError(`Failed to fetch message: ${error.message}`);
        setMessage(''); // Clear loading message
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js Frontend</h1>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <p className="text-xl">Message from Backend: <span className="font-semibold">{message}</span></p>
      )}
    </main>
  );
} 