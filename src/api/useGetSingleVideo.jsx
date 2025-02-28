import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
import { fetchSingleVideo, options } from ".";

function GetSingleVideo(paramsId) {
  // const params = useParams()

  const { data, error, isLoading } = useQuery({
    queryKey: ["singleVideo", paramsId],
    queryFn: () => fetchSingleVideo(paramsId, options),
  });

  return { data, error, isLoading };
}

export default GetSingleVideo;
