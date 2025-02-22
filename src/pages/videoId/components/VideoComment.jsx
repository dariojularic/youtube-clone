import "./VideoComment.css";
import { formatDistanceToNow } from "date-fns";

function VideoComment({
  authorDisplayName,
  updatedAt,
  publishedAt,
  authorProfileImageUrl,
  textOriginal,
}) {
  return (
    <article className="comment-container">
      <div className="comment-img-container">
        <img src={authorProfileImageUrl} alt="" />
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

export default VideoComment;
