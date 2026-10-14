import { useParams, useLocation } from "react-router";
import { useState, useEffect } from "react";

function ItemDetails({ books, setBooks }) {
  const { id } = useParams();
  const location = useLocation();

  const author = location.state?.author;
  const [book, setBook] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [readingStatus, setReadingStatus] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/works/${id}.json`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }

        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };

    getBookDetails();
  }, [id]);

  if (!book) {
    return <p>Loading book...</p>;
  }

  const handleFavorite = () => {
    const alreadySaved = books.some((savedBook) => savedBook.id === book.key);

    if (alreadySaved) {
      setBooks((prev) =>
        prev.map((book) => {
          if (book.id === book.key) {
            return {
              ...book,
              isFavorite: !book.isFavorite,
            };
          } else {
            return book;
          }
        }),
      );
    } else {
      setBooks((prev) => [
        ...prev,
        {
          id: book.key,
          title: book.title,
          author: author?.join(", ") ?? "Unknown Author",
          cover_i: book.covers[0],
          isFavorite: true,
          readingStatus: "completed",
        },
      ]);
    }
  };

  return (
    <>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
        alt={book.title}
      />
      <h1>{book.title}</h1>
      <h2>{author?.join(", ") ?? "Unknown Author"}</h2>
      <p>{book.description.value}</p>
      <div className="save-options">
        <label for="reading-status">Reading Status</label>
        <select name="reading-status" id="reading-status">
          <option value="want-to-read">Want to Read</option>
          <option value="reading">Reading</option>
          <option value="completed">Completed</option>
          <option value="not started">Not Started</option>
        </select>

        <button className="favorite" onClick={handleFavorite}>
          Favorite
        </button>
      </div>
    </>
  );
}

export default ItemDetails;
