import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
import { fetchSingleVideo, options } from ".";


// oce ovo bit samo funkcija koja vraca data, error i isLoading ili ce bit jsx componenta??

function GetSingleVideo(paramsId) {
  // const params = useParams()

  const { data, error, isLoading } = useQuery({
    queryKey: ["singleVideo", paramsId],
    queryFn: () => fetchSingleVideo(paramsId, options),
  });


  return { data, error, isLoading };
}

export default GetSingleVideo;
