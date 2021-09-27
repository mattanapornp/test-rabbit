import useSWR from 'swr';
import axios from 'axios';

/**
 * fetch the data from platform url
 */
const usePlatFormData = (
  type: string | string[],
  onErrorCb: (err?: any) => void = () => null
) => {
  const { data, error, isValidating } = useSWR(
    type ? `/api/platform/${type}` : null,
    (url) => axios.get(url).then((res) => res.data),
    {
      onError: (err, key) => {
        onErrorCb(err);
        console.log(key, err);
      },
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return {
    config: data,
    isLoading: (!error && !data) || isValidating,
    isError: error,
  };
};

export default usePlatFormData;
