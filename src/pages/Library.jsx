import LibraryItem from "../components/LibraryItem";

function Library({ books }) {
  return (
    <div>
      <h1>My Library</h1>

      {books.map((book) => (
        <LibraryItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Library;
