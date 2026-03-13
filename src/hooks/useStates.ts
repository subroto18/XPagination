import { useEffect, useState } from "react";

const useStates = (countryName: string) => {
  const [states, setStates] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStates = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://location-selector.labs.crio.do/country=${countryName}/states`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }

      const data = await response.json();
      setStates(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (countryName) {
      fetchStates();
    }
  }, [countryName]);

  return { states, loading, error };
};

export default useStates;
