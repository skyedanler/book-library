export default function LibraryItem({ book }) {
  let displayAuthor;

  if (book.author !== undefined && book.author !== null) {
    displayAuthor = book.author;
  } else if (book.author_name !== undefined && book.author_name !== null) {
    displayAuthor = book.author_name.join(", ");
  } else {
    displayAuthor = "Unknown Author";
  }

  return (
    <div className="book-card">
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
      />
      <div className="book-text">
        <h2>{book.title}</h2>
        <h3>{displayAuthor}</h3>
        {book.readingStatus && <p>Status: {book.readingStatus}</p>}
      </div>
    </div>
  );
}
