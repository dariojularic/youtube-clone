import "./Sidebar.css";
import categories from "../../categories";

function Sidebar() {
  return (
    <aside>
      {categories.map((category) => {
        console.log("icon", category.icon);
        console.log("category", category.category);
        return (
          <div key={category.id} className="single-category">
            <img src={`/src/assets/${category.icon}`} alt="" className="category-icon"  />
            <p className="category-paragraph">{category.category}</p>
          </div>
        );
      })}
    </aside>
  );
}

export default Sidebar;
