// src/components/BookCard.jsx
import Link from 'next/link';

export default function BookCard({ book }) {
  return (
    <Link href={`/book/${book.id}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
        <div className="h-40 sm:h-48 bg-gray-700 flex items-center justify-center">
          <div className="text-gray-500 text-sm">Book Cover</div>
        </div>
        <div className="p-4 flex-grow">
          <h3 className="font-bold text-base sm:text-lg mb-1 line-clamp-2">{book.title}</h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-2">{book.author}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-yellow-400 text-sm"></span>
              <span className="ml-1 text-xs sm:text-sm">{book.rating}</span>
            </div>
            <span className="px-2  py-1 bg-gray-700 rounded-full text-xs capitalize">
              {book.genre}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}     