const baseUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export async function getData(endpoint, queryParams) {
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
