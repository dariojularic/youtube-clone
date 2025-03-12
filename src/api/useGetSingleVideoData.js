import { useQuery } from "@tanstack/react-query";
import { fetchSingleVideo, fetchVideoComments, fetchData, fetchApi } from ".";

function useGetSingleVideoData(paramsId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["singleVideo", paramsId],
    queryFn: () => fetchData(fetchApi.getSingleVideo(paramsId)),
  });

  const {
    data: commentsData,
    error: commentsError,
    isLoading: commentsIsLoading,
  } = useQuery({
    queryKey: ["videoComments", paramsId],
    queryFn: () => fetchData(fetchApi.getVideoComments(paramsId)),
  });

  return {
    data,
    error,
    isLoading,
    commentsData,
    commentsError,
    commentsIsLoading,
  };
}

export default useGetSingleVideoData;
