import "./App.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import NewVideos from "./pages/newvideos/NewVideos";
import SharedLayout from "./layouts/SharedLayout";
import { createContext, useState } from "react";

const queryClient = new QueryClient();

// tu ide useState za category

export const categoryContext = createContext();
function App() {
    const [activeCategory, setActiveCategory] = useState("New");

  return (
    <QueryClientProvider client={queryClient}>
      <categoryContext.Provider value={{activeCategory, setActiveCategory}}>
        <SharedLayout />
      </categoryContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
