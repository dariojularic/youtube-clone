import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import NewVideos from "./pages/newvideos/NewVideos.jsx";
import VideoId from "./pages/videoId/VideoId.jsx";
import ChannelId from "./pages/channelId/ChannelId.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { path: "/", element: <NewVideos /> },
      { path: "/video/:id", element: <VideoId /> },
      { path: "/channel/:id", element: <ChannelId /> },
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
