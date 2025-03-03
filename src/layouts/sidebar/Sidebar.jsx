import "./Sidebar.css";
import categories from "../../categories";
import { useState } from "react";

function Sidebar() {
  const [activeCategory, setActiveCategory] = useState("");

  // state activeCategory = ""
  return (
    <aside>
      {categories.map((category) => {
        // console.log("icon", category.icon);
        // console.log("category", category.category);
        return (
          <div key={category.id} className={activeCategory !== category.category ? "single-category" : "single-category selected-category"} onClick={() => setActiveCategory(category.category)}>
            <img src={`/src/assets/${category.icon}`} alt="" className="category-icon"  />
            <p className="category-paragraph">{category.category}</p>
          </div>
        );
      })}
    </aside>
  );
}

export default Sidebar;
