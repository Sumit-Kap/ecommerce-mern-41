import React from "react";
const BASE_URL = "http://localhost:3000";
export const useGetApi = (url) => {
  const [response, setResponse] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(undefined);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${url}`);
        const results = await response.json();
        setResponse(results);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    getData();
  }, []);

  return { response, loading, error };
};
