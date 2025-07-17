// src/components/SearchBar.jsx
export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="mb-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search books or authors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
        />
        <svg
          className="absolute left-3 top-2.5 h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}