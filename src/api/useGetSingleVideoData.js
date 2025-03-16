import { useQuery } from "@tanstack/react-query";
import { getData } from ".";

function useGetSingleVideoData(paramsId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["singleVideo", paramsId],
    queryFn: () =>
      getData("videos", {
        part: "contentDetails,snippet,statistics",
        id: paramsId,
      }),
  });

  const {
    data: commentsData,
    error: commentsError,
    isLoading: commentsIsLoading,
  } = useQuery({
    queryKey: ["videoComments", paramsId],
    queryFn: () =>
      getData("commentThreads", {
        part: "snippet",
        videoId: paramsId,
        maxResults: "8",
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
