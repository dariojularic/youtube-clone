import "./Sidebar.css";
import categories from "#src/categories";
import PropTypes from 'prop-types';

function Sidebar({ activeCategory, setActiveCategory }) {
  return (
    <aside>
      {categories.map((category) => {
        return (
          <div
            key={category.id}
            className={
              activeCategory !== category.category
                ? "single-category"
                : "single-category selected-category"
            }
            onClick={() => setActiveCategory(category.category)}
          >
            <img
              src={`/assets/${category.icon}`}
              alt=""
              className="category-icon"
            />
            <p className="category-paragraph">{category.category}</p>
          </div>
        );
      })}
    </aside>
  );
}

Sidebar.propTypes = {
  activeCategory: PropTypes.string,
  setActiveCategory: PropTypes.func,
};

export default Sidebar;
