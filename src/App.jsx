import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SharedLayout from "./layouts/SharedLayout";
import { createContext, useState } from "react";

const queryClient = new QueryClient();

export const categoryContext = createContext();
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
