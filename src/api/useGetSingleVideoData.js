import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
import { fetchSingleVideo, fetchVideoComments, options } from ".";


// oce ovo bit samo funkcija koja vraca data, error i isLoading ili ce bit jsx componenta??

function useGetSingleVideoData(paramsId) {
  // const params = useParams()

  const { data, error, isLoading } = useQuery({
    queryKey: ["singleVideo", paramsId],
    queryFn: () => fetchSingleVideo(paramsId, options),
  });

  const {
    data: commentsData,
    error: commentsError,
    isLoading: commentsIsLoading,
  } = useQuery({
    queryKey: ["videoComments", paramsId],
    queryFn: () => fetchVideoComments(paramsId, options),
  });


  return { data, error, isLoading, commentsData, commentsError, commentsIsLoading };
}

export default useGetSingleVideoData;
