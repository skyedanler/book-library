import { useState } from 'react';
import LibraryItem from '../components/LibraryItem';

function Library({ books }) {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState();

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const handleSort = (sort) => {
    setSort(sort);
  };

  let displayedBooks = [...books];

  //filter buttons
  if (filter === "wantToRead") {
    displayedBooks = books.filter(
      (book) => book.readingStatus === "want-to-read",
    );
  } else if (filter === "reading") {
    displayedBooks = books.filter((book) => book.readingStatus === "reading");
  } else if (filter === "completed") {
    displayedBooks = books.filter((book) => book.readingStatus === "completed");
  }

  //sort buttons
  if (sort === "title") {
    displayedBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "author") {
    displayedBooks.sort((a, b) => a.author.localeCompare(b.author));
  } else if (sort === "readingStatus") {
    displayedBooks.sort((a, b) =>
      a.readingStatus.localeCompare(b.readingStatus),
    );
    displayedBooks.reverse();
  }

  return (
    <div>
      <h1>My Library</h1>
      <div className="filtering">
        <p>Filter By: </p>
        <div className="filter-buttons">
          <button onClick={() => handleFilter("all")}>All Books</button>
          <button onClick={() => handleFilter("wantToRead")}>
            Want To Read
          </button>
          <button onClick={() => handleFilter("reading")}>Reading</button>
          <button onClick={() => handleFilter("completed")}>Completed</button>
        </div>
      </div>

      <div className="sorting">
        <p>Sort By: </p>
        <div className="sort-buttons">
          <button onClick={() => handleSort("title")}>Sort By Title</button>
          <button onClick={() => handleSort("author")}>Sort By Author</button>
          <button onClick={() => handleSort("readingStatus")}>
            Sort By Reading Status
          </button>
        </div>
      </div>

      <div className="books">
        {displayedBooks.map((book) => (
          <LibraryItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Library;
