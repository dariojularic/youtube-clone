import { useQuery } from "@tanstack/react-query";
import { fetchApi } from ".";

function useGetChannelData(paramsId) {

  console.log(typeof fetchApi.getChannelData(paramsId))
  const { data, error, isLoading } = useQuery({
    queryKey: ["channelData", paramsId],
    queryFn: () => fetchApi.fetchData(fetchApi.getChannelData(paramsId)),
    enabled: !!paramsId,
  });

  const {
    data: channelVideosData,
    error: channelVideosError,
    isLoading: channelVideosIsLoading,
  } = useQuery({
    queryKey: ["channelVideos", paramsId],
    queryFn: () => fetchApi.fetchData(fetchApi.getChannelVideos(paramsId)),
    enabled: !!paramsId,
  });
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["channelData", paramsId],
  //   queryFn: () => fetchChannelData(paramsId, options),
  //   enabled: !!paramsId,
  // });

  // const {
  //   data: channelVideosData,
  //   error: channelVideosError,
  //   isLoading: channelVideosIsLoading,
  // } = useQuery({
  //   queryKey: ["channelVideos", paramsId],
  //   queryFn: () => fetchChannelVideos(paramsId, options),
  //   enabled: !!paramsId,
  // });

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
