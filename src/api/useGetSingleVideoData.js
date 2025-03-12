import { useQuery } from "@tanstack/react-query";
import { fetchApi } from ".";

function useGetSingleVideoData(paramsId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["singleVideo", paramsId],
    queryFn: () => fetchApi.fetchData(fetchApi.getSingleVideo(paramsId)),
  });

  const {
    data: commentsData,
    error: commentsError,
    isLoading: commentsIsLoading,
  } = useQuery({
    queryKey: ["videoComments", paramsId],
    queryFn: () => fetchApi.fetchData(fetchApi.getVideoComments(paramsId)),
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
