import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = (page, amount) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = React.useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?_start=${(page * amount) - amount}&_limit=${amount * page}`
      );
      await setList((prev) => [...prev, ...res.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [page, amount]);

  useEffect(() => {
    sendQuery()
  }, [page, sendQuery, amount]);

  return { loading, error, list };
}

export default FetchData
