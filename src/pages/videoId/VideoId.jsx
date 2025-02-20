import "./VideoId.css"
import { fetchSingleVideo, options } from "../../api";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../layouts/loader/Loader";

function VideoId() {
  const params = useParams()
  // console.log(params)

  const { data, error, isLoading } = useQuery({
    queryKey: ["singleVideo"],
    queryFn: () => fetchSingleVideo(params.id, options),
  });

  if (error) console.error(error)

  if (isLoading) return <Loader />

  console.log(data.items[0])

  return (
    <div className="video-id-container">
      <div className="clicked-video-container">
        <div className="display-video-container">
          <video width="640" height="480" controls >
            <source src={data.items[0].snippet.thumbnails.standard.url} type="video/mp4" />
          </video>
        </div>

        <div className="video-info">

        </div>

        <div className="video-comments">

        </div>
      </div>

      <div className="recommended-videos">

      </div>
    </div>
  )
}

export default VideoId;
