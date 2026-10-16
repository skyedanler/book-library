import { useParams, useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";

function ItemDetails({ books, setBooks }) {
  const { id } = useParams();
  const location = useLocation();

  const author = location.state?.author;
  const [book, setBook] = useState(null);

  const navigate = useNavigate();

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

  const alreadySaved = books.some((savedBook) => savedBook.id === book.key);

  const handleFavorite = () => {
    if (alreadySaved) {
      setBooks((prev) =>
        prev.map((book) => {
          if (savedBook.id === book.key) {
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

  const handleReadingStatus = (status) => {
    if (alreadySaved) {
      setBooks((prev) =>
        prev.map((book) => {
          if (savedBook.id === book.key) {
            return {
              ...book,
              readingStatus: status,
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
          isFavorite: false,
          readingStatus: status,
        },
      ]);
    }
  };

  const handleDeletion = () => {
    setBooks((prev) => prev.filter((savedBook) => savedBook.id !== book.key));
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
        alt={book.title}
      />
      <h1>{book.title}</h1>
      <h2>{author?.join(", ") ?? "Unknown Author"}</h2>
      <p>{book.description.value}</p>
      <div className="save-options">
        <label htmlFor="reading-status">Reading Status</label>
        <select
          name="reading-status"
          id="reading-status"
          value={savedBook ? savedBook.readingStatus : "not started"}
          onChange={(event) => handleReadingStatus(event.target.value)}
        >
          <option value="want-to-read">Want to Read</option>
          <option value="reading">Reading</option>
          <option value="completed">Completed</option>
        </select>

        <button className="favorite" onClick={handleFavorite}>
          Favorite
        </button>

        {alreadySaved && (
          <button className="delete" onClick={handleDeletion}>
            Remove from Library
          </button>
        )}
      </div>
    </>
  );
}

export default ItemDetails;
