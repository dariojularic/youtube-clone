import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../api";
import VideoCard from "./components/VideoCard";
import Sidebar from "../../layouts/sidebar/Sidebar";
import Loader from "../../layouts/loader/Loader";
import { baseUrl } from "../../api";
import { options } from "../../api";
import "./NewVideos.css";

function NewVideos() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: () => fetchData(baseUrl, options),
  });
  // console.log("query", query.isFetched);
  // console.log("query", data);

  if (error) console.log("error", error);

  if (isLoading) return <Loader />;

  return (
    <div className="home-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="video-grid">
        {data?.items.map((video) => {
          console.log(video);
          return (
            <VideoCard
              key={video.id.videoId}
              id={video.id.videoId}
              title={video.snippet.title}
              publishedAt={video.snippet.publishedAt}
              channelTitle={video.snippet.channelTitle}
              thumbnails={video.snippet.thumbnails}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewVideos;
