// USE FETCH HOOK
// This hook is used to fetch data from the server.
// It takes the URL as a parameter and returns the data, error, loading, setData, and fetchData.

import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = (url) => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.users);
      })
      .catch(() => {
        setData(null);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, error, loading, setData, fetchData };
};

export default useFetch;
