export default function LibraryItem({ book }) {
  return (
    <>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
        alt={book.title}
      />
      <div className="book-text">
        <h2>{book.title}</h2>
        <h3>
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </h3>
      </div>
    </>
  );
}
