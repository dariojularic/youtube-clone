import { useQuery } from "@tanstack/react-query";
import { getData } from ".";

function useGetRecommendedVideos(paramsId, channelId) {
  const {
    data: channelVideosData,
    error: channelVideosError,
    isLoading: channelVideosIsLoading,
  } = useQuery({
    queryKey: ["channelVideos", channelId, paramsId],
    queryFn: () =>
      getData("search", {
        channelId: channelId,
        part: "snippet,id",
        order: "date",
        maxResults: "8",
      }),
    enabled: !!channelId,
  });

  return {
    channelVideosData,
    channelVideosError,
    channelVideosIsLoading,
  };
}

export default useGetRecommendedVideos;
