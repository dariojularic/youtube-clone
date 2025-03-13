import { useQuery } from "@tanstack/react-query";
import { fetchApi, buildUrl } from ".";

function useGetChannelData(paramsId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["channelData", paramsId],
    // queryFn: () => fetchApi.fetchData(fetchApi.getChannelData(paramsId)),
    queryFn: () =>
      buildUrl("channels", {
        part: "snippet,statistics",
        id: paramsId,
      }),
    enabled: !!paramsId,
  });

  const {
    data: channelVideosData,
    error: channelVideosError,
    isLoading: channelVideosIsLoading,
  } = useQuery({
    queryKey: ["channelVideos", paramsId],
    // queryFn: () => fetchApi.fetchData(fetchApi.getChannelVideos(paramsId)),
    queryFn: () =>
      buildUrl("search", {
        channelId: paramsId,
        part: "snippet,id",
        order: "date",
        maxResults: "12",
      }),
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
