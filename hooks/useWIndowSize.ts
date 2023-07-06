'use client'
import { useState, useEffect } from 'react';

export default function useWindowSize(): [number, number] {
  const [windowSize, setWindowSize] = useState<[number, number]>(() => {
    if (typeof window !== 'undefined') {
      return [window.innerWidth, window.innerHeight];
    } else {
      return [0, 0];
    }
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}