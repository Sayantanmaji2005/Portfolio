import { useState, useEffect } from 'react';

const BASE_VISITOR_COUNT = 1482;
const STORAGE_KEY = 'sm_portfolio_visitor_count';
const SESSION_KEY = 'sm_portfolio_visited_session';

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= BASE_VISITOR_COUNT) {
          return parsed;
        }
      }
    }
    return BASE_VISITOR_COUNT;
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const hasVisitedThisSession = sessionStorage.getItem(SESSION_KEY);
      let currentCount = visitorCount;

      if (!hasVisitedThisSession) {
        currentCount += 1;
        setVisitorCount(currentCount);
        localStorage.setItem(STORAGE_KEY, currentCount.toString());
        sessionStorage.setItem(SESSION_KEY, 'true');
      }

      // Public counter fetch with safe fallback
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      fetch('https://api.counterapi.dev/v1/sayantanmaji_portfolio/views/up', {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          clearTimeout(timeoutId);
          if (data && typeof data.count === 'number') {
            const remoteCount = BASE_VISITOR_COUNT + data.count;
            if (remoteCount > currentCount) {
              setVisitorCount(remoteCount);
              localStorage.setItem(STORAGE_KEY, remoteCount.toString());
            }
          }
        })
        .catch(() => {})
        .finally(() => {
          setIsLoading(false);
        });
    } catch {
      setIsLoading(false);
    }
  }, []);

  const formattedCount = visitorCount.toLocaleString('en-US');

  return {
    visitorCount,
    formattedCount,
    isLoading,
  };
};

export default useVisitorCount;
