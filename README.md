# Personal Book Library

A React application that allows users to search for books and save them to their library or favorite them.

## Live Demo

<a href="book-library-danler.netlify.app">book-library-danler.netlify.app</a>

## Features

- Search for books by title, author, and/or subject using an API.
- View individual book details, including titles, authors, covers, and descriptions when available.
- Add books to your library.
- Favorite and unfavorite books.
- Keep track of reading progress with three statuses: Want to Read, Reading, and Completed.
- Filter books by reading status.
- Sort books by title, author, or reading status.
- Remove books from the library.
- Save books using localStorage.

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## Setup

To run this project locally:

1. Clone the repository:

   ```bash
   git clone git@github.com:skyedanler/book-library.git
   ```

2. Navigate into the project folder:

   ```bash
   cd book-library
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided in the terminal.

## API Documentation

This project uses the free Open Library API - "https://openlibrary.org/search.json"

Searches can include the following query parameters:

- Search by book title. (title=${title})
- Search by author.    (author=${author})
- Search by subject.  (subject=${subject})

URLSearchParams formatted searches into usable strings for URL


### Endpoints

https://openlibrary.org/works/{workId}.json --> gives more information about a book using the id given on initial search to search book further for item details.

https://covers.openlibrary.org/b/id/{coverId}-M.jpg to search the cover by ID given in initial search results and then display on subsequent library item.

### API Key and Rate

**API Key** No API key is required for the endpoints used in this project.

**Rate Limits:** Their documentation describes a default limit of 1 request per second.


## Project Structure

The project is organized into separate pages, reusable components, and a custom hook.

```text
book-library/
├── public/
├── src/
│   ├── components/
│   │   ├── LibraryItem.jsx
│   │   ├── Navigation.jsx
│   │   └── SearchResults.jsx
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   ├── ItemDetails.jsx
│   │   ├── Library.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── Search.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── App.css
└── └── main.jsx
```


## Future Enhancements

- Allowing users to rate books.
- Creating custom reading lists.

## Author

Skye Danler


## License

No license.
