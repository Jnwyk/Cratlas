import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch<T>(url: string): [T | null, boolean, boolean] {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        setTimeout(async () => {
          const fetchedData = await axios.get(url);
          setData(fetchedData.data);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchData(url);
  }, [url]);

  return [data, isLoading, isError];
}
