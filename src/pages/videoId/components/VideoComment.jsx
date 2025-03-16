import "./VideoComment.css";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import { useState } from "react";

function VideoComment({
  authorDisplayName,
  publishedAt,
  authorProfileImageUrl,
  textOriginal,
}) {
  const [imgSrc, setImgSrc] = useState(authorProfileImageUrl);

  const handleImageError = () => {
    setImgSrc("/assets/defaultAvatar.png");
  };

  return (
    <article className="comment-container">
      <div className="comment-img-container">
        <img
          className="comment-avatar"
          src={imgSrc}
          alt="avatar"
          onError={handleImageError}
        />
      </div>

      <div className="comment-text-container">
        <div className="comment-author-date">
          <h5 className="comment-author-name">{authorDisplayName}</h5>
          <p className="comment-date">
            {formatDistanceToNow(publishedAt, { addSuffix: true })}
          </p>
        </div>
        <p className="comment-content">{textOriginal}</p>
      </div>
    </article>
  );
}

VideoComment.propTypes = {
  authorDisplayName: PropTypes.string,
  textOriginal: PropTypes.string,
  authorProfileImageUrl: PropTypes.string,
  publishedAt: PropTypes.string,
};

export default VideoComment;
