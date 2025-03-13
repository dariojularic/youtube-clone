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
      buildUrl("videos", {
        // jel ima razlike izmedu stavljanja zareza i %2C?
        part: "contentDetails,snippet,statistics",
        id: paramsId,
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
