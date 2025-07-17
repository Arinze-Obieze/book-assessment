'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import BookCard from '@/components/BookCard';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Read the filter state from URL when component mounts
    const showFilters = searchParams.get('showFilters');
    setMobileFiltersOpen(showFilters === 'true');
  }, [searchParams]);

  // Mock data remains the same
  const books = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
      genre: "fiction",
    },
  ];

  const genres = ['all', 'fiction', 'non-fiction'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <>
      <main className="container mx-auto py-6 px-4">
        {/* Mobile Filters */}
        {mobileFiltersOpen && (
          <div className="md:hidden mb-6 bg-gray-800 p-4 rounded-lg">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FilterBar 
              genres={genres} 
              selectedGenre={selectedGenre} 
              setSelectedGenre={setSelectedGenre} 
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop Filters */}
          <div className="hidden md:block md:w-1/4">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FilterBar 
              genres={genres} 
              selectedGenre={selectedGenre} 
              setSelectedGenre={setSelectedGenre} 
            />
          </div>
          
          {/* Book List */}
          <div className="w-full md:w-3/4">
            {filteredBooks.length === 0 ? (
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-gray-400">No books found matching your criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}