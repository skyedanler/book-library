import LibraryItem from '../components/LibraryItem';
import { Link } from 'react-router';

function Favorites({ books }) {
  const favoriteBooks = books.filter((book) => {
    return book.isFavorite;
  });

  return (
    <div>
      <h1>Favorites</h1>
      <ul className="books">
        {favoriteBooks.map((book) => (
          <li key={book.id}>
            <Link
              to={`/books/${book.id.split("/").pop()}`}
              state={{ author: [book.author] }}
            >
              <LibraryItem book={book} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
