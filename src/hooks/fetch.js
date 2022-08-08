import { useCallback, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestFetch = useCallback(async (receivedRequest,applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await receivedRequest;

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || "Something Went Wrong!");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    requestFetch,
  };
};

export default useFetch;
