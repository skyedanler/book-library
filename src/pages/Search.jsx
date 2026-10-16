import SearchResults from "../components/SearchResults";
import { useState } from "react";

function Search() {
  const [titleInput, setTitleInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");

  const [APIResults, setAPIResults] = useState([]);

  let baseUrl = "https://openlibrary.org/search.json";

  const searchBooks = async () => {
    try {
      const params = new URLSearchParams();

      if (titleInput.trim()) {
        params.append("title", titleInput.trim());
      }

      if (authorInput.trim()) {
        params.append("author", authorInput.trim());
      }

      if (subjectInput.trim()) {
        params.append("subject", subjectInput.trim());
      }

      const url = `${baseUrl}?${params.toString()}`;

      if (!params.toString()) {
        alert("Please enter a title, author, and/or subject.");
        return;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      setAPIResults(data.docs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Search Books</h1>
      <div className="search-section">
        <p>
          <em>
            Search by book title or author. For best results, use complete
            words.
          </em>
        </p>
        <div className="search-options">
          <label htmlFor="title-search">
            Search By Title:
            <input
              type="text"
              id="title-search"
              name="title-search"
              value={titleInput}
              onChange={(event) => setTitleInput(event.target.value)}
            />
          </label>

          <label htmlFor="author-search">
            Search By Author:
            <input
              type="text"
              id="author-search"
              name="author-search"
              value={authorInput}
              onChange={(event) => setAuthorInput(event.target.value)}
            />
          </label>

          <label htmlFor="subject-search">
            Search By Subject:
            <input
              type="text"
              id="subject-search"
              name="subject-search"
              value={subjectInput}
              onChange={(event) => setSubjectInput(event.target.value)}
            />
          </label>
        </div>

        <button onClick={searchBooks}>Search</button>
      </div>
      <SearchResults books={APIResults} />
    </>
  );
}

export default Search;
