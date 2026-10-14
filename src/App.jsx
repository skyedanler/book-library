import { Route, Routes } from "react-router";
import { useState } from "react";
import "./App.css";
import Library from "./pages/Library";
import Search from "./pages/Search";
import ItemDetails from "./pages/ItemDetails";
import Favorites from "./pages/Favorites";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/library" element={<Library books={books} />} />
        <Route path="/favorites" element={<Favorites books={books} />} />
        <Route
          path="/books/:id"
          element={<ItemDetails books={books} setBooks={setBooks} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
