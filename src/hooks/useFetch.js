import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);       // To store fetched data
  const [loading, setLoading] = useState(true); // To show loading state
  const [error, setError] = useState(null);     // To handle errors

  // Function to fetch data (memoized with useCallback)
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  // Fetch data on initial render or when URL changes
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetch;
