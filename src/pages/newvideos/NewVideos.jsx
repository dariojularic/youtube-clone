import "./NewVideos.css";
import VideoCard from "./components/VideoCard";
import ChannelCard from "./components/ChannelCard";
import Sidebar from "#layouts/sidebar/Sidebar";
import Loader from "#layouts/loader/Loader";
import useGetCategoryVideos from "#api/useGetCategoryVideos";
import { useContext } from "react";
import { categoryContext } from "#src/CategoryContext";

function NewVideos() {
  const { activeCategory, setActiveCategory } = useContext(categoryContext);

  const { data, error, isLoading } = useGetCategoryVideos(activeCategory);

  if (error) console.log("error", error);

  if (isLoading) return <Loader />;

  return (
    <div className="home-grid">
      <h1>
        <span className="h1-span"> {activeCategory} </span> videos{" "}
      </h1>
      <div className="sidebar-container">
        <Sidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <div className="video-grid">
        {data?.items.map((video) => {
          if (!video.id.videoId && !video.id.channelId) return;
          return video.id.kind === "youtube#video" ? (
            <VideoCard
              key={video.id.videoId}
              id={video.id.videoId}
              {...video.snippet}
            />
          ) : (
            <ChannelCard
              key={video.id.channelId}
              id={video.id.channelId}
              {...video.snippet}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewVideos;
