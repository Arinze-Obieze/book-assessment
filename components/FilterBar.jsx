export default function FilterBar({ genres, selectedGenre, setSelectedGenre }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      <h3 className="font-semibold mb-2 text-gray-300 text-sm sm:text-base">Filter by Genre</h3>
      <div className="space-y-1">
        {genres.map(genre => (
          <div key={genre} className="flex items-center">
            <input
              type="radio"
              id={genre}
              name="genre"
              checked={selectedGenre === genre}
              onChange={() => setSelectedGenre(genre)}
              className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor={genre} className="ml-2 text-xs sm:text-sm capitalize">
              {genre}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}