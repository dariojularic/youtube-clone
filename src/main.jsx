import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewVideos from "./pages/newvideos/NewVideos.jsx";
import VideoId from "./pages/videoId/VideoId.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { path: "/", element: <NewVideos /> },
      { path: "/video/:id", element: <VideoId /> },
      // { path: "/channel/:id", element: <ChannelId /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
