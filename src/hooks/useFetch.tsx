// the API return non-camelcased variables
/* eslint-disable camelcase */
import { useState, useEffect } from 'react';

interface FetchResultUsersInterface {
  total_pages: number;
  data: [{ id: string; avatar: string; first_name: string; last_name: string }];
}

type FetchResultInterface = FetchResultUsersInterface;

interface UseFetcherProps {
  method: string;
  url: string;
  infiniteScroll: boolean;
}

const useFetcher = ({
  method = 'GET',
  url,
  infiniteScroll = false,
}: UseFetcherProps): [FetchResultInterface, boolean, any] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData]: [
    FetchResultInterface | any,
    React.Dispatch<React.SetStateAction<{}>>
  ] = useState({});

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, { method });
        const resToJson: FetchResultInterface = await res.json();

        if (infiniteScroll) {
          setData({
            ...resToJson,
            data: [...(data.data || []), ...resToJson.data],
          });
        } else {
          setData(resToJson);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    // we don't need to act on the data change, so we can ignore the lint error
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, infiniteScroll]);
  return [data, loading, error];
};

export default useFetcher;
