// export const baseUrl =
//   "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=20";

// export const fetchCategoryVideos = async (category, options) => {
//   try {
//     const response = await fetch(
//       `https://youtube-v31.p.rapidapi.com/search?q=${category}&part=snippet,id&maxResults=24&regionCode=US`,
//       options
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchChannelData = async (channelId, options) => {
//   try {
//     const response = await fetch(
//       `https://youtube-v31.p.rapidapi.com/channels?part=snippet,statistics&id=${channelId}`,
//       options
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// console.log(import.meta.env.VITE_API_KEY)
// export const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "9aba36c31dmshf69462f95cf832ap1e712bjsne4307c79a742",
//     "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
//   },
// };

// funkcija buildUrl prima endpoint i query parametre

export async function buildUrl(endpoint, queryParams) {
  const baseUrl = "https://youtube-v31.p.rapidapi.com";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const completeUrl = `${baseUrl}/${endpoint}?${new URLSearchParams(
    queryParams
  ).toString()}`;

  const fetchData = async () => {
    try {
      const response = await fetch(completeUrl, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const data = await fetchData();
  return data;
}

// console.log(buildUrl("commentThreads", "0Y74yXozT2I"))

// /videos?part=contentDetails%2Csnippet%2Cstatistics&id=3253`
// commentThreads?part=snippet&videoId=gag3wt2&maxResults=8
// const queryParams = {
//   part: "snippet",
//   videoId: value,
//   "filter[adId]": this.props.id,
// };

// const response = await ccapi({
//   url: `/ccapi/v4/analytics/ads-visit-records?${new URLSearchParams(queryParams).toString()}`,
//   method: 'GET'
// });

export function fetchFactory() {
  const baseUrl = "https://youtube-v31.p.rapidapi.com";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const getSingleVideo = (videoId) =>
    `${baseUrl}/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`;
  const getVideoComments = (videoId) =>
    `${baseUrl}/commentThreads?part=snippet&videoId=${videoId}&maxResults=8`;
  const getCategoryVideos = (category) =>
    `${baseUrl}/search?q=${category}&part=snippet,id&maxResults=24&regionCode=US`;
  const getChannelData = (channelId) =>
    `${baseUrl}/channels?part=snippet,statistics&id=${channelId}`;
  const getChannelVideos = (channelId) =>
    `${baseUrl}/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=8`;

  const fetchData = async (url) => {
    try {
      // console.log(url)
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getCategoryVideos,
    getChannelData,
    getChannelVideos,
    getSingleVideo,
    getVideoComments,
    fetchData,
  };
}

export const fetchApi = fetchFactory();

// export const fetchData = async (url, options) => {
//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchSingleVideo = async (videoId, options) => {
//   try {
//     const response = await fetch(
//       `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`,
//       options
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchVideoComments = async (videoId, options) => {
//   try {
//     const response = await fetch(
//       `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${videoId}&maxResults=80`,
//       options
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchChannelVideos = async (channelId, options) => {
//   try {
//     const response = await fetch(
//       `https://youtube-v31.p.rapidapi.com/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=32`,
//       options
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };
