import { useEffect, useState } from "react";

export function useFetch(api) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log("UseFetch triggered");
    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setData(json);
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
        setIsError(true);
        console.error("Error fetching data:", error);
      });
  }, []);

  return { isLoading, data, setData, error, isError };
}
