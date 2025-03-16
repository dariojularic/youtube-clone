import "./App.css";
import SharedLayout from "./layouts/SharedLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { categoryContext } from "./CategoryContext";

const queryClient = new QueryClient();

function App() {
  const [activeCategory, setActiveCategory] = useState("New");

  return (
    <QueryClientProvider client={queryClient}>
      <categoryContext.Provider value={{ activeCategory, setActiveCategory }}>
        <SharedLayout />
      </categoryContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
