'use client';
import { useState } from 'react';
export default function HomePage({onSearch}) {
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mt-10 text-black">
      <input
        type="text"
        placeholder="Describe your symptoms..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button type="submit"
        className="w-full max-w-md bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Search</button>   
    </form>
  );
}
