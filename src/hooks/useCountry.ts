import { useEffect, useState } from "react";

const useCountry = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://location-selector.labs.crio.do/countries",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }

      const data = await response.json();
      setCountries(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return { countries, loading, error };
};

export default useCountry;
