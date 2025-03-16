import { useQuery } from "@tanstack/react-query";
import { getData } from ".";

function useGetChannelData(paramsId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["channelData", paramsId],
    queryFn: () =>
      getData("channels", {
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
    queryFn: () =>
      getData("search", {
        channelId: paramsId,
        part: "snippet,id",
        order: "date",
        maxResults: "24",
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
