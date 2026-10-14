import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/library">Library</Link>
      </li>
      <li>
        <Link to="/favorites">Favorites</Link>
      </li>
    </nav>
  );
}
