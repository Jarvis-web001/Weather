import { useState } from 'react';

export default function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full animate-slide-up">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city..."
        disabled={loading}
        className="flex-1 px-5 py-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white placeholder-white/50 outline-none focus:bg-white/20 focus:border-white/40 transition-all text-base disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={loading || !query.trim()}
        className="px-6 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/25 text-white font-medium hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {loading ? '···' : 'Go'}
      </button>
    </form>
  );
}
