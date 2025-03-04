import { useQuery } from "@tanstack/react-query";
import { fetchVideoComments, fetchChannelVideos, options } from ".";

function useGetRecommendedVideos(paramsId, channelId) {
  // const {
  //   data: commentsData,
  //   error: commentsError,
  //   isLoading: commentsIsLoading,
  // } = useQuery({
  //   queryKey: ["videoComments", paramsId],
  //   queryFn: () => fetchVideoComments(paramsId, options),
  // });

  // const channelId = commentsData?.items[0]?.snippet?.channelId;

  const {
    data: channelVideosData,
    error: channelVideosError,
    isLoading: channelVideosIsLoading,
  } = useQuery({
    queryKey: ["channelVideos", channelId, paramsId],
    queryFn: () => fetchChannelVideos(channelId, options),
    enabled: !!channelId,
  });

  return {
    // commentsData,
    // commentsError,
    // commentsIsLoading,
    channelVideosData,
    channelVideosError,
    channelVideosIsLoading,
  };
}

export default useGetRecommendedVideos;
