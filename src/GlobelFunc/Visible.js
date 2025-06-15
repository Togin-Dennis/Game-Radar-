import { useEffect } from 'react';

const useIntersectionFetch = ({ ref, onVisible, threshold = 0.01, disabled = false }) => {
  useEffect(() => {
    if (disabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(); // Call your custom fetch logic
          observer.disconnect(); // Stop observing after trigger
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, onVisible, threshold, disabled]);
};

export default useIntersectionFetch;
