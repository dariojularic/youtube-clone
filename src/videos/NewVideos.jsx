import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api";
import VideoCard from "./components/VideoCard";
import "./NewVideos.css"

function NewVideos() {
  const baseUrl =
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9aba36c31dmshf69462f95cf832ap1e712bjsne4307c79a742",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: () => fetchData(baseUrl, options),
  });
  // console.log("query", query.isFetched);
  // console.log("query", data);

  if (error) console.log("error", error);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="video-grid">
      {data?.items.map((video) => {
        console.log(video.snippet);
        return (
          <VideoCard
            key={video.id.videoId}
            title={video.snippet.title}
            publishedAt={video.snippet.publishedAt}
            channelTitle={video.snippet.channelTitle}
            thumbnails={video.snippet.thumbnails}
          />
        );
      })}
    </div>
  );
}

export default NewVideos;
