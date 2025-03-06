import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { useState } from "react";

function SharedLayout() {
  const [activeCategory, setActiveCategory] = useState("New");

  return (
    <>
      <Navbar setActiveCategory={setActiveCategory} />
      <Outlet activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
    </>
  );
}

export default SharedLayout;
