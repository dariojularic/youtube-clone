import "./VideoCard.css";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function VideoCard({ title, thumbnails, publishedAt, channelTitle, id }) {
  return (
    <Link className="video-card-link link" to={`/video/${id}`}>
      <div className="video-card-container">
        <div className="image-container">
          <img src={thumbnails.medium.url} className="video-card-img" />
        </div>

        <div className="video-card-info-container">
          <h4 className="card-title">{title}</h4>
          <p className="card-channel">{channelTitle}</p>
          <p className="video-posted-date">
            {formatDistanceToNow(new Date(publishedAt), { addSuffix: true })}
          </p>
        </div>
      </div>
    </Link>
  );
}

VideoCard.propTypes = {
  title: PropTypes.string,
  thumbnails: PropTypes.object,
  publishedAt: PropTypes.string,
  channelTitle: PropTypes.string,
  id: PropTypes.string,
};

export default VideoCard;
