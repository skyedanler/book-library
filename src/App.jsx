import { Route, Routes } from "react-router";
import "./App.css";
import Library from "./pages/Library";
import Search from "./pages/Search";
import ItemDetails from "./pages/ItemDetails";
import Favorites from "./pages/Favorites";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/bookdetails/:id" element={<ItemDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
