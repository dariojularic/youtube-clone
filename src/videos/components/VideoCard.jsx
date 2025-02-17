import "./VideoCard.css";
import { format, formatDistanceToNow } from "date-fns";

function VideoCard({ title, thumbnails, publishedAt, channelTitle }) {
  return (
    <div className="video-card-container">
      <div className="image-container">
        <img src={thumbnails.medium.url} alt="" />
      </div>

      <div className="video-card-info-container">
        <h4 className="card-title">{title}</h4>
        <p className="card-channel">{channelTitle}</p>
        <p className="video-posted-date">{formatDistanceToNow(new Date(publishedAt), {addSuffix: true})}</p>
      </div>
    </div>
  );
}

export default VideoCard;
