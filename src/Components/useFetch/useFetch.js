import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setError(`Error: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(`An error occurred: ${error.message}`);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    error,
  };
};

export default useFetch;
