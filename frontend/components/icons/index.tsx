import { useState, useEffect } from "react";
import { fetchIcons } from "../../lib/icons";

export function useIconData() {
  const [icons, setIcons] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFooterIcons = async () => {
      try {
        const footerIcons = await fetchIcons();
        setIcons(footerIcons[0]);
      } catch (error) {
        setError("Error fetching icons");
      } finally {
        setLoading(false);
      }
    };

    fetchFooterIcons();
  }, []);

  return { icons, loading, error };
}
