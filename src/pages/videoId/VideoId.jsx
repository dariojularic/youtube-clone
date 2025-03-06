import "./VideoId.css";
import { useParams } from "react-router-dom";
import VideoCard from "../newvideos/components/VideoCard";
import Loader from "../../layouts/loader/Loader";
import VideoComment from "./components/VideoComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShareFromSquare,
  faCircleDown,
} from "@fortawesome/free-regular-svg-icons";
import useGetRecommendedVideos from "../../api/useGetRecommendedVideos";
import useGetSingleVideoData from "../../api/useGetSingleVideoData";

function VideoId() {
  const params = useParams();

  // vidjet kako iskoristit promiseAll da se ovi videi dohvate svi odjednom

  // useGetSingleVideoData file i on vraca data error isLoading
  // useGetExtraInfo file i on vraca data error isLoading

  const { data, error, isLoading, commentsData, commentsError, commentsIsLoading } = useGetSingleVideoData(params.id)

  const channelId = data?.items[0]?.snippet?.channelId;

  const {
    channelVideosData,
    channelVideosError,
    channelVideosIsLoading,
  } = useGetRecommendedVideos(params.id, channelId)

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
            <p className="video-views">{Number(videoStatistics.viewCount).toLocaleString()} views</p>

            <div className="video-likes">
              <button className="like-btn video-btn">
                <FontAwesomeIcon icon={faThumbsUp} />
                {Number(videoStatistics.likeCount).toLocaleString()}
              </button>
              <button className="dislike-btn video-btn">
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
              <button className="share-btn video-btn">
                <FontAwesomeIcon icon={faShareFromSquare} />
                SHARE
              </button>
              <button className="download-btn video-btn">
                <FontAwesomeIcon icon={faCircleDown} />
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="video-comments">
          {commentsData.items.map((comment) => {
            const commentData = comment.snippet.topLevelComment.snippet;
            console.log(commentData.authorProfileImageUrl)
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
