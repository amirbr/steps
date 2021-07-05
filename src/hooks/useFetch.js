import React, { useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = React.useCallback(async (method, url ) => {
    try {
      setLoading(true);
      setError(false);
      const res = await axios({ method: method, url: url })
      setList((prev) => [...prev, ...res.data]);
      setLoading(false);
    } catch (err) {
      console.log('Error on fetch', error)
      setError(true);
    }
  }, []);

  return { loading, error, list, sendQuery };
}

export default useFetch
