import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/library">Library</Link>
        </li>
        <li className="nav-link">
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
