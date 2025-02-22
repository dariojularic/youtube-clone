import "./VideoComment.css";

function VideoComment({
  authorDisplayName,
  updatedAt,
  publishedAt,
  authorProfileImageUrl,
  textOriginal
}) {
  return (
    <article>
      <div className="comment-img-container">
        <img src={authorProfileImageUrl} alt="" />
      </div>

      <div className="comment-text-container">
        <h5>
          {authorDisplayName}
          <span>{publishedAt}</span>
        </h5>
        <p className="comment-content">{textOriginal}</p>
      </div>
    </article>
  );
}

export default VideoComment;
