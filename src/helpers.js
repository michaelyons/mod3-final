export const initialFetch = async () => {
  const url = 'http://localhost:3001/api/v1/houses';
  const response = await fetch(url);
  const info = await response.json();
  return info;
};

