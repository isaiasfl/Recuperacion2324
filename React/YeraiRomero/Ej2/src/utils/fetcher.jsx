// function to fetch from jsonserver /altas folder
export const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('An error occurred while fetching the data');
  }
  return res.json();
}