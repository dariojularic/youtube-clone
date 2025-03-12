import { useQuery } from "@tanstack/react-query";
import { fetchApi } from ".";

function useGetRecommendedVideos(paramsId, channelId) {
  const {
    data: channelVideosData,
    error: channelVideosError,
    isLoading: channelVideosIsLoading,
  } = useQuery({
    queryKey: ["channelVideos", channelId, paramsId],
    queryFn: () => fetchApi.fetchData(fetchApi.getChannelVideos(channelId)),
    enabled: !!channelId,
  });

  return {
    channelVideosData,
    channelVideosError,
    channelVideosIsLoading,
  };
}

export default useGetRecommendedVideos;
