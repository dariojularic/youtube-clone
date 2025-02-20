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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SharedLayout />
    </QueryClientProvider>
  );
}

export default App;
