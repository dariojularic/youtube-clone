import "./Sidebar.css";
import categories from "../../categories";
// import { useState } from "react";

function Sidebar({activeCategory, setActiveCategory}) {
  // console.log("activeCategory", activeCategory)
  // console.log("setActiveCategory", setActiveCategory)
  // const [activeCategory, setActiveCategory] = useState("");

  return (
    <aside>
      {categories.map((category) => {
        return (
          <div key={category.id} className={activeCategory !== category.category ? "single-category" : "single-category selected-category"} onClick={() => setActiveCategory(category.category)}>
            <img src={`/assets/${category.icon}`} alt="" className="category-icon"  />
            <p className="category-paragraph">{category.category}</p>
          </div>
        );
      })}
    </aside>
  );
}

export default Sidebar;
