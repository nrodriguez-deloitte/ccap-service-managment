/**
 * Custom React hook to fetch outage data.
 *
 * This hook manages the state and lifecycle for fetching outage data,
 * including loading and error states. It currently uses a dummy constant
 * as the data source, but can be adapted to fetch from an API.
 *
 * @returns An object containing:
 * - `data`: The fetched outage data of type {@link IOutageDataProps}.
 * - `loading`: Boolean indicating if the data is currently being loaded.
 * - `error`: A string with the error message if fetching fails, or `null` if no error.
 *
 * @example
 * const { data, loading, error } = useFetchOutageData();
 */
import { useEffect, useState } from "react";
import { IOutageDataProps } from "../types/global.types";
import { DUMMY_CONSTANTS } from "./constants";

/**
 * Custom hook to fetch outage data.
 * Returns: { data, loading, error }
 */
export function useFetchOutageData() {
  const [data, setData] = useState<IOutageDataProps>({} as IOutageDataProps);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://mock.httpstatus.io/200");
        if (!res.ok) throw new Error("Failed to fetch users");
        // const data = await res.json();

        setData(DUMMY_CONSTANTS);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
