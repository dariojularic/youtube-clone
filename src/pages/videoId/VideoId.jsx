import "./VideoId.css";
import { fetchVideoComments, fetchSingleVideo, options } from "../../api";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../layouts/loader/Loader";
import VideoComment from "./components/VideoComment";

function VideoId() {
  const params = useParams();
  // console.log(params)

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

  

  if (error) console.error(error);

  if (isLoading) return <Loader />;

  // console.log("commentsData", commentsData)

  const videoInfo = data.items[0].snippet;
  const videoStatistics = data.items[0].statistics;
  // console.log(data.items[0]);
  // console.log("snippet", data.items[0].snippet);

  return (
    <div className="video-id-container">
      <div className="clicked-video-container">
        <div className="display-video-container">
          <iframe
            width="960"
            height="560"
            src={`https://www.youtube.com/embed/${params.id}`}
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-info">
          <h4>{videoInfo.title}</h4>

          <div className="video-details">
            <p className="video-views">{videoStatistics.viewCount} views</p>

            <div className="video-likes">
              <button className="like-btn">{videoStatistics.likeCount}</button>
              <button className="dislike-btn">thumb down</button>
              <button className="share-btn">SHARE</button>
              <button className="download-btn">Download</button>
            </div>
          </div>
        </div>

        <div className="video-comments">
          {commentsData.items.map((comment) => {
            // console.log(
            //   "comment.snippet.topLevelComment.snippet",
            //   comment.snippet.topLevelComment.snippet
            // );
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

      <div className="recommended-videos"></div>
    </div>
  );
}

export default VideoId;
