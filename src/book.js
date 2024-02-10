import React from "react";

function BookCard({ book , onToggleStatus}) {
  const handleToggleStatus = () => {
    console.log(book.status);
    onToggleStatus(book.work.key);
  };


  return (
    <div className="book-card">
      <img src={`https://covers.openlibrary.org/b/id/${book.work.cover_id}-M.jpg`} alt={book.work.title} className="book-cover" />
      <div className="book-details">
        <h3 className="book-title">{book.work.title}</h3>
        <p className="book-author">Author: {book.work.author_names[0]}</p>
        <p className="book-published-year">Published Year: {book.work.first_publish_year}</p>
        <button
          className={`book-status-btn ${book.status === 'read' ? 'read' : ''}`}
          onClick={handleToggleStatus}
          style={{ backgroundColor: book.status === 'read' ? 'green' : 'transparent', border: book.status === 'read' ? 'none' : '1px solid black' }}
        >
          {book.status === 'read' ? 'Read' : 'Unread'}
        </button>
      </div>
    </div>
  );
}

export default BookCard;
