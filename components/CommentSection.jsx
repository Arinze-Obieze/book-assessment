// src/components/CommentSection.jsx
export default function CommentSection({ comments, newComment, setNewComment, onAddComment }) {
    return (
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Reviews</h3>
        
        <div className="space-y-4 mb-6">
          {comments.map(comment => (
            <div key={comment.id} className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-purple-300">{comment.user}</span>
                <span className="text-sm text-gray-400">{comment.date}</span>
              </div>
              <p className="text-gray-300">{comment.text}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-6">
          <h4 className="font-medium mb-3">Add your review</h4>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts about this book..."
            className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
            rows="3"
          />
          <button
            onClick={onAddComment}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition"
          >
            Post Review
          </button>
        </div>
      </div>
    );
  }