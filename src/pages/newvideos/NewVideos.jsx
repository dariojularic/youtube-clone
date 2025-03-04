import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../api";
import VideoCard from "./components/VideoCard";
import Sidebar from "../../layouts/sidebar/Sidebar";
import Loader from "../../layouts/loader/Loader";
import { baseUrl } from "../../api";
import { options } from "../../api";
import { useState } from "react";

import "./NewVideos.css";

function NewVideos() {
    const [activeCategory, setActiveCategory] = useState("");

  const { data, error, isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: () => fetchData(baseUrl, options),
  });

  if (error) console.log("error", error);

  if (isLoading) return <Loader />;

  console.log(activeCategory)

  return (
    <div className="home-grid">
      <h1>New videos</h1>
      <div className="home-container">
        <div className="sidebar-container">
          <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory}  />
        </div>
        <div className="video-grid">
          {data?.items.map((video) => {
            // console.log(video);
            return (
              <VideoCard
                key={video.id.videoId}
                id={video.id.videoId}
                {...video.snippet}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NewVideos;
