import { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import { IOutageDataProps } from "../types/global.types";

export function useFetchOutageData() {
  const [data, setData] = useState<IOutageDataProps>({} as IOutageDataProps);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = (await invoke("getOutageData")) as {
          success: boolean;
          data?: IOutageDataProps;
          error?: string;
        };
        if (result.success && result.data) {
          setData(result.data);
        } else {
          throw new Error(result.error || "Failed to fetch outage data");
        }
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
