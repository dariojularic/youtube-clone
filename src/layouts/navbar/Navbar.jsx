import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <Link to="/">
          <div className="logo-container">
            <img
              src="/src/assets/youtube.svg"
              alt="youtube logo"
              className="youtube-logo"
            />
            <p className="logo-paragraph">YouTube</p>
          </div>
        </Link>
        <form action="">
          <input
            type="text"
            placeholder="Search..."
            className="navbar-search-input"
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
