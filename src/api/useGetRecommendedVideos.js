import { useQuery } from "@tanstack/react-query";
import { fetchChannelVideos, fetchData, fetchApi, options } from ".";

function useGetRecommendedVideos(paramsId, channelId) {
  const {
    data: channelVideosData,
    error: channelVideosError,
    isLoading: channelVideosIsLoading,
  } = useQuery({
    queryKey: ["channelVideos", channelId, paramsId],
    queryFn: () => fetchData(fetchApi.getChannelVideos(channelId), options),
    enabled: !!channelId,
  });

  return {
    channelVideosData,
    channelVideosError,
    channelVideosIsLoading,
  };
}

export default useGetRecommendedVideos;
