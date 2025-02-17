import "./App.css";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewVideos from "./videos/NewVideos";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <NewVideos />
    </QueryClientProvider>
  )

}

export default App;
