import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <Link className="link" to="/">
          <div className="logo-container">
            <img
              src="/src/assets/youtube.svg"
              alt="youtube logo"
              className="youtube-logo"
            />
            <p className="logo-paragraph">YouTube</p>
          </div>
        </Link>
        <form >
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
