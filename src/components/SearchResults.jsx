import LibraryItem from "./LibraryItem";
import { Link } from "react-router";

function SearchResults({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.key}>
          <Link
            to={`/books/${book.key.split("/").pop()}`}
            state={{ author: book.author_name }}
          >
            <LibraryItem book={book} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
