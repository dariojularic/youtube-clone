import { useQuery } from "@tanstack/react-query";
import { fetchSingleVideo, fetchVideoComments, options } from ".";

function useGetSingleVideoData(paramsId) {
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
