import { useQuery } from "@tanstack/react-query";
import { fetchData, fetchCategoryVideos } from "../../api";
import VideoCard from "./components/VideoCard";
import ChannelCard from "./components/ChannelCard";
import Sidebar from "../../layouts/sidebar/Sidebar";
import Loader from "../../layouts/loader/Loader";
import { baseUrl } from "../../api";
import { options } from "../../api";
import { useContext } from "react";
import { categoryContext } from "../../App";

import "./NewVideos.css";

function NewVideos() {
  // const [activeCategory, setActiveCategory] = useState("New");
  const {activeCategory, setActiveCategory} = useContext(categoryContext)
  // console.log(activeCategory)


  const { data, error, isLoading } = useQuery({
    queryKey: ["videos", activeCategory],
    queryFn: () => fetchCategoryVideos(activeCategory, options),
  });

  if (error) console.log("error", error);

  if (isLoading) return <Loader />;
  console.log(data)


  return (
    <div className="home-grid">
      <h1><span className="h1-span"> {activeCategory} </span> videos </h1>
      {/* <div className="home-container"> */}
        <div className="sidebar-container">
          <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory}  />
        </div>
        <div className="video-grid">
          {data?.items.map((video) => {
            if (!video.id.videoId && !video.id.channelId) return
            return (video.id.kind === "youtube#video") ? <VideoCard key={video.id.videoId} id={video.id.videoId} {...video.snippet} /> : <ChannelCard key={video.id.channelId} id={video.id.channelId} {...video.snippet} />
            // return (
            //   <VideoCard
            //     key={video.id.videoId}
            //     id={video.id.videoId}
            //     {...video.snippet}
            //   />
            // );
          })}
        </div>
      {/* </div> */}
    </div>
  );
}

export default NewVideos;
