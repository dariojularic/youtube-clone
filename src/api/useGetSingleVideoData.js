import { useQuery } from "@tanstack/react-query";
import { fetchApi, buildUrl } from ".";

function useGetSingleVideoData(paramsId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["singleVideo", paramsId],
    // queryFn: () => fetchApi.fetchData(fetchApi.getSingleVideo(paramsId)),
    queryFn: () =>
      buildUrl("videos", {
        // jel ima razlike izmedu stavljanja zareza i %2C?
        part: "contentDetails,snippet,statistics",
        id: paramsId,
        // maxResults: 12,
      }),
  });

  const {
    data: commentsData,
    error: commentsError,
    isLoading: commentsIsLoading,
  } = useQuery({
    queryKey: ["videoComments", paramsId],
    // queryFn: () => fetchApi.fetchData(fetchApi.getVideoComments(paramsId)),
    queryFn: () =>
      buildUrl("commentThreads", {
        part: "snippet",
        videoId: paramsId,
        maxResults: 12,
      }),
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
