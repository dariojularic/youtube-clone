import { useQuery } from "@tanstack/react-query";
import { options } from ".";
import { fetchChannelData, fetchChannelVideos } from ".";

function useGetChannelData(paramsId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["channelData", paramsId],
    queryFn: () => fetchChannelData(paramsId, options),
    enabled: !!paramsId,
  });

  const {
    data: channelVideosData,
    error: channelVideosError,
    isLoading: channelVideosIsLoading,
  } = useQuery({
    queryKey: ["channelVideos", paramsId],
    queryFn: () => fetchChannelVideos(paramsId, options),
    enabled: !!paramsId,
  });

  return {
    data,
    error,
    isLoading,
    channelVideosData,
    channelVideosError,
    channelVideosIsLoading,
  };
}

export default useGetChannelData;
