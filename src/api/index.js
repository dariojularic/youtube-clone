export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json()
    // console.log(data.items)
    return data;
  } catch (error) {
    console.error(error);
  }
};
