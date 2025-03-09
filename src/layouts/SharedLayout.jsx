import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { useContext, useState } from "react";
import { categoryContext } from "../App";

function SharedLayout() {
  // const [activeCategory, setActiveCategory] = useState("New");
  // const {activeCategory} = useContext(categoryContext)
  // console.log(activeCategory)
  return (
    <>
      <Navbar  />
      <Outlet />
    </>
  );
}

export default SharedLayout;
