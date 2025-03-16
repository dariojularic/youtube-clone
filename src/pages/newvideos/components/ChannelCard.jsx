import "./ChannelCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ChannelCard({ channelTitle, thumbnails, description, id }) {
  return (
    <Link className="channel-card-link link" to={`/channel/${id}`}>
      <div className="channel-card-container">
        <div className="image-container">
          <img
            src={thumbnails.medium.url}
            className="channel-card-img"
            alt=""
          />
        </div>

        <div className="channel-card-info-container">
          <h4 className="channel-card-title">{channelTitle}</h4>
          <p className="channel-description">{description.substring(0, 100)}</p>
        </div>
      </div>
    </Link>
  );
}

ChannelCard.propTypes = {
  channelTitle: PropTypes.string,
  thumbnails: PropTypes.object,
  description: PropTypes.string,
  id: PropTypes.string,
};

export default ChannelCard;
