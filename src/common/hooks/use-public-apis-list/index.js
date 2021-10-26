import { useState, useEffect } from "react";
import { logError } from "../../services/logger";

import { fetchPublicApisList } from "../../services/public-apis";

export default function useEntries() {
  const [publicApis, setPublicApis] = useState(null);

  useEffect(() => {
    const getPublicApis = async () => {
      try {
        const entries = await fetchPublicApisList();
        setPublicApis(entries.entries);
      } catch (err) {
        logError(err);
      }
    };

    getPublicApis();
  }, []);

  return publicApis;
}
