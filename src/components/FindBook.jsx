import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function FindBook(){
   const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks("popular books");
  }, []);

const fetchBooks = async (searchTerm) => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=10`);
    const data = await res.json();
    setBooks(data.items || []);
  };

const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      fetchBooks(query);
    }
  };

     return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🔍 Find & Join Book Clubs</h2>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex mb-6">
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-gray flex-grow p-2 border rounded-l"
        />
        <button type="submit" className="bg-blue-600 px-4 rounded-r">
          Search
        </button>
      </form>

      {/* Book Results */}
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book) => (
            <div key={book.id} className="p-4 border rounded shadow bg-white text-black">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128"}
                alt={book.volumeInfo.title}
                className="w-32 h-40 object-cover mb-2"
              />
              <h3 className="text-lg font-bold">{book.volumeInfo.title}</h3>
              <p className="text-sm text-gray-600">{book.volumeInfo.authors?.join(", ")}</p>

              <div className="mt-3 space-x-2">
                <Link to={`/clubs/${book.id}`}>
                  <button className="px-3 py-1 bg-green-600 text-white rounded">Join Club</button>
                </Link>
                <Link to={`/create-club?bookId=${book.id}`}>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded">Create Club</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FindBook