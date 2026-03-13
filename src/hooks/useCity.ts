import { useEffect, useState } from "react";

const useCity = (countryName: string, stateName: string) => {
  const [cities, setCities] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStates = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://location-selector.labs.crio.do/country=${countryName}/state=${stateName}/cities`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }

      const data = await response.json();
      setCities(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (countryName && stateName) {
      fetchStates();
    }
  }, [countryName, stateName]);

  return { cities, loading, error };
};

export default useCity;
