import { useQuery } from "@tanstack/react-query";
import { getData } from ".";

function useGetCategoryVideos(category) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["videos", category],
    queryFn: () =>
      getData("search", {
        q: category,
        part: "snippet,id",
        maxResults: "8",
        regionCode: "US",
      }),
  });

  return {
    data,
    error,
    isLoading,
  };
}

export default useGetCategoryVideos;
