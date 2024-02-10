import React, { useState, useEffect } from 'react';
import booksData from "./data.js";
import BookCard from "./book.js"
import "./style.css";
function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Use the imported data directly
    const booksWithStatus = booksData.map(book => ({ ...book, status: 'unread' }));
    setBooks(booksWithStatus);
  }, []);


  const handleToggleStatus = (book) => {
    
    const updatedBooks = books.map(b => b.work.key === book? { ...b, status: b.status === 'read' ? 'unread' : 'read' } : b);
    setBooks(updatedBooks);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredBooks = books.filter(book =>
    book.work.title && book.work.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <div className="search-bar">
        <input type="text" id="search-input" placeholder="Search books" value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="books-list">
        {filteredBooks.map(book =>
          <BookCard key={book.key} book={book} onToggleStatus={handleToggleStatus} />
        )}
      </div>
    </div>
  );
}

export default App;
