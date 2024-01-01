import { useState, useEffect } from "react";

export default function useVisitCount() {
  const [visitCount, setVisitCount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (visitCount) return;

    const url = process.env.NEXT_PUBLIC_API_BASE_URL + "/visitCount";

    const updateVisitCount = async () => {
      const options: RequestInit = {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
      return response.json();
    };

    updateVisitCount()
      .then((data) => setVisitCount(data.visitCount))
      .catch((err) => setError(err.message));
  }, []);

  return { data: visitCount, error };
}
