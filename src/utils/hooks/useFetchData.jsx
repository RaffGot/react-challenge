import { useState, useEffect } from "react";

const apiUrl = "https://pokeapi.co/api/v2/";

export const useFetchData = (url, page) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const limitAndOffset = page
          ? `?limit=20&offset=${(page - 1) * 20}`
          : "";
        const response = await fetch(`${apiUrl}${url}${limitAndOffset}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page]);

  return { data, loading, error };
};
