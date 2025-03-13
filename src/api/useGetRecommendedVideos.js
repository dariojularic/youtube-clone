import { useQuery } from "@tanstack/react-query";
import { fetchApi, buildUrl } from ".";

function useGetRecommendedVideos(paramsId, channelId) {
  const {
    data: channelVideosData,
    error: channelVideosError,
    isLoading: channelVideosIsLoading,
  } = useQuery({
    queryKey: ["channelVideos", channelId, paramsId],
    // queryFn: () => fetchApi.fetchData(fetchApi.getChannelVideos(channelId)),
    queryFn: () =>
      buildUrl("search", {
        channelId: channelId,
        part: "snippet,id",
        order: "date",
        maxResults: "8"
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
