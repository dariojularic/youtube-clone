import "./VideoId.css";
import {
  fetchVideoComments,
  fetchSingleVideo,
  options,
  fetchChannelVideos,
} from "../../api";
import { useParams } from "react-router-dom";
import VideoCard from "../newvideos/components/VideoCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../layouts/loader/Loader";
import VideoComment from "./components/VideoComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShareFromSquare,
  faCircleDown,
} from "@fortawesome/free-regular-svg-icons";

function VideoId() {
  const params = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["singleVideo"],
    queryFn: () => fetchSingleVideo(params.id, options),
  });

  const {
    data: commentsData,
    error: commentsError,
    isLoading: commentsIsLoading,
  } = useQuery({
    queryKey: ["videoComments"],
    queryFn: () => fetchVideoComments(params.id, options),
  });

  const channelId = data?.items[0]?.snippet?.channelId;

  const {
    data: channelVideosData,
    error: channelVideosError,
    isLoading: channelVideosIsLoading,
  } = useQuery({
    queryKey: ["channelVideos", channelId],
    queryFn: () => fetchChannelVideos(channelId, options),
    enabled: !!channelId,
  });

  if (error) console.error(error);

  if (commentsError) console.error(commentsError);

  if (channelVideosError) console.error(channelVideosError);

  if (isLoading || commentsIsLoading || channelVideosIsLoading)
    return <Loader />;


  const videoInfo = data.items[0].snippet;
  const videoStatistics = data.items[0].statistics;

  return (
    <div className="video-id-container">
      <div className="clicked-video-container">
        <div className="display-video-container">
          <iframe
            width="960"
            height="560"
            src={`https://www.youtube.com/embed/${params.id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-info">
          <div className="title-channel-container">
            <h4>{videoInfo.title}</h4>
            <p className="channel-title">{videoInfo.channelTitle}</p>
          </div>

          <div className="video-details">
            <p className="video-views">{videoStatistics.viewCount} views</p>

            <div className="video-likes">
              <button className="like-btn">
                {videoStatistics.likeCount}
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
              <button className="dislike-btn">
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
              <button className="share-btn">
                <FontAwesomeIcon icon={faShareFromSquare} />
                SHARE
              </button>
              <button className="download-btn">
                <FontAwesomeIcon icon={faCircleDown} />
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="video-comments">
          {commentsData.items.map((comment) => {
            const commentData = comment.snippet.topLevelComment.snippet;
            return (
              <VideoComment
                key={comment.id}
                authorDisplayName={commentData.authorDisplayName}
                publishedAt={commentData.publishedAt}
                authorProfileImageUrl={commentData.authorProfileImageUrl}
                textOriginal={commentData.textOriginal}
              />
            );
          })}
        </div>
      </div>

      <div className="recommended-videos">
        <ul>
          {channelVideosData.items.map((channelVideo) => {
            // console.log("channelVideo.id.videoId", channelVideo.id.videoId, channelVideo.snippet)
            return (
              <VideoCard
                key={channelVideo.id.videoId}
                id={channelVideo.id.videoId}
                {...channelVideo.snippet}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default VideoId;
