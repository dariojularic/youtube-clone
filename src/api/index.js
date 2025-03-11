export const fetchCategoryVideos = async (category, options) => {
  try {
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${category}&part=snippet,id&maxResults=24&regionCode=US`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchChannelData = async (channelId, options) => {
  try {
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/channels?part=snippet,statistics&id=${channelId}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSingleVideo = async (videoId, options) => {
  try {
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchVideoComments = async (videoId, options) => {
  try {
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${videoId}&maxResults=80`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchChannelVideos = async (channelId, options) => {
  try {
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=32`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const baseUrl =
  "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=20";

export const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "9aba36c31dmshf69462f95cf832ap1e712bjsne4307c79a742",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};
