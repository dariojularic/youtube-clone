import "./ChannelId.css";
import useGetChannelData from "#api/useGetChannelData";
import { useParams } from "react-router-dom";
import Loader from "#layouts/loader/Loader";
import VideoCard from "#pages/newvideos/components/VideoCard";

function ChannelId() {
  const params = useParams();

  const {
    data,
    error,
    isLoading,
    channelVideosData,
    channelVideosError,
    channelVideosIsLoading,
  } = useGetChannelData(params.id);

  if (error) console.log("error", error);

  if (channelVideosError) console.log("error", error);

  if (isLoading || channelVideosIsLoading) return <Loader />;

  console.log(data)
  console.log(channelVideosData)


  const snippet = data.items[0].snippet;
  const imageUrl = data.items[0].brandingSettings.image.bannerExternalUrl;

  return (
    <div className="channel-id-container">
      <div className="channel-description">
        <img src={imageUrl} className="channel-id-image" />
        <h2 className="channel-id-title">{snippet.title}</h2>
        <p className="description">{snippet.description}</p>
      </div>

      <div className="grid-container">
        <h3 className="channel-id-grid-heading">
          {`${snippet.title}'s`} <span className="channel-id-span">videos</span>
        </h3>
        <div className="video-grid">
          {channelVideosData.items.map((video) => {
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

export default ChannelId;
