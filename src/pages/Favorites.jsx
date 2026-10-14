function Favorites({ books }) {
  const favoriteBooks = books.filter((book) => {
    book.isFavorite;
  });

  return (
    <div>
      <h1>Favorites</h1>
      <p>These are your favorite books.</p>
      <ul>
        {favoriteBooks.map((book) => {
          <LibraryItem book={book} />;
        })}
      </ul>
    </div>
  );
}

export default Favorites;
