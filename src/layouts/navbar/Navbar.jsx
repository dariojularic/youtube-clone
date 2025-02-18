import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="/src/assets/youtube.svg"
            alt="youtube logo"
            className="youtube-logo"
          />
          <p className="logo-paragraph">YouTube</p>
        </div>
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
