import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout.jsx";
import NewVideos from "./pages/newvideos/NewVideos.jsx";
import Loader from "./layouts/loader/Loader.jsx";
import VideoId from "./pages/videoId/VideoId.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { path: "/", element: <NewVideos /> },
      { path: "/video/:id", element: <VideoId /> },
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
