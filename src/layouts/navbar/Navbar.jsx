import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { categoryContext } from "../../App";

function Navbar() {
  const [inputValue, setInputValue] = useState("")
  const {activeCategory, setActiveCategory} = useContext(categoryContext)
  console.log(activeCategory)

  return (
    <nav>
      <div className="navbar-container">
        <Link className="link" to="/">
          <div className="logo-container">
            <img
              src="/assets/youtube.svg"
              alt="youtube logo"
              className="youtube-logo"
            />
            <p className="logo-paragraph">YouTube</p>
          </div>
        </Link>
        <form onSubmit={(event) => {
          event.preventDefault()
          console.log(inputValue)
          setActiveCategory(inputValue)
        }}>
          <input
            type="text"
            placeholder="Search..."
            className="navbar-search-input"
            onChange={event => setInputValue(event.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
