'use client'
import CommentSection from '@/components/CommentSection';
import Header from '@/components/Header';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useState } from 'react';

export default function BookDetails() {
  const [comments, setComments] = useState([
    { id: 1, user: 'BookLover42', text: 'This book changed my perspective!', date: '2023-05-15' },
    { id: 2, user: 'LiteraryFan', text: 'The character development was amazing.', date: '2023-04-22' }
  ]);
  const [newComment, setNewComment] = useState('');

  const book = {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "/book1.jpg",
    genre: "fiction",
    rating: 4.2,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    publicationDate: "2020-08-13"
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: 'CurrentUser',
        text: newComment,
        date: new Date().toISOString().split('T')[0]
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
   <ProtectedRoute> <div className="min-h-screen bg-gray-900 text-gray-100">
   <Header onFilterToggle={() => {}} />

  <main className="container mx-auto py-8 px-4">
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/3">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="h-64 bg-gray-700 flex items-center justify-center">
            <img 
              src={book.cover} 
              alt={book.title} 
              className="h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p className="text-purple-400 mb-4">by {book.author}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{book.rating}</span>
              <span className="ml-4 px-3 py-1 bg-gray-700 rounded-full text-sm">
                {book.genre}
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Published: {new Date(book.publicationDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-2/3">
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Description</h3>
          <p className="text-gray-300">{book.description}</p>
        </div>

        <CommentSection 
          comments={comments}
          newComment={newComment}
          setNewComment={setNewComment}
          onAddComment={handleAddComment}
        />
      </div>
    </div>
  </main>
</div></ProtectedRoute>

  );
}